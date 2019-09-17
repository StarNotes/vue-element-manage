import router, { staticRouteMap, dynamicRouteMap } from '@/router';
import store from '@/store';

import config from '@/assets/config';


// 从路由权限表中获取到角色可访问的路由名称
const getRouteNames = (roles, permission) => {
  let routeNames = [];
  roles.forEach(role => routeNames = [...new Set([...routeNames, ...permission[role]])]);
  return routeNames;
}

//根据路由名称获取可访问的路由表
const filterRouteMap = (routeNames, routeMap) => {
  const acceptedRouteMap = [];
  routeMap.forEach(route => {
    // 如果一级路由的名称存在路由权限表中，则它之下的所有子路由都可访问
    if (routeNames.includes(route.name)) {
      acceptedRouteMap.push(route)
    } else {
      // 如果一级路由的名称不在路由权限表中，再看它的哪些子路由名称在路由权限表中
      if (route.children) {
        route.children = filterRouteMap(routeNames, route.children);
        // 如果有子路由可访问，再添加。
        if (route.children.length > 0) {
          acceptedRouteMap.push(route)
        }
      }
    }
  })
  return acceptedRouteMap;
}



router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token');
  if (!token && to.path !== '/login') {
    next('/login');
  } else {
    if (token && store.getters.roles.length === 0) {
      store.dispatch('GetUserInfo').then(res => {
        const roles = res.roles;
        const routeNames = getRouteNames(roles, config.permission);
        const acceptedRouteMap = filterRouteMap(routeNames, dynamicRouteMap);
        router.addRoutes(acceptedRouteMap);
        store.commit('SET_ROUTE_MAP', [...staticRouteMap, ...acceptedRouteMap])
        next();
      })
    } else {
      next();
    }
  }
})

