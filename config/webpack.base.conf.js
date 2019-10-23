const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const resolve = (dir) => {
  return path.resolve(process.cwd(), dir)
}

module.exports = {
  entry: {
    app: resolve('src/main.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      filename: 'index.html',
      favicon: resolve('public/favicon.ico'),
      minify: {
        removeAttributeQuotes: true,
        removeComments: true,
        collapseWhitespace: true,
      }
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [{
      test: /\.jpg|png|gif|jpeg|bmp|svg$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name]-[hash:6].[ext]'
        }
      },
      exclude: resolve('src/components/SvgIcon/icons')
    }, {
      test: /\.svg$/,
      use: {
        loader: 'svg-sprite-loader',
        options: {
          symbolId: 'icon-[name]'
        }
      },
      include: resolve('src/components/SvgIcon/icons')
    }, {
      test: /\.ttf|eot|woff|woff2$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name]-[hash:6].[ext]'
        },
      }
    }, {
      test: /\.mp4|webm|ogg|mp3|wav|flac|aac$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:6].[ext]'
        }
      }
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.vue$/,
      use: 'vue-loader'
    }]
  },
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.js', '.json', '.vue']
  }
};
