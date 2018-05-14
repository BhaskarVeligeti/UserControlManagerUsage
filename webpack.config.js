const path = require('path')
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|dist)/,

        use: {
          loader: 'babel-loader',
          options: {
            presets: ["react"],
            "plugins": [
              "transform-object-rest-spread",
              "transform-react-jsx"
            ]
          }
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            "plugins": [
              "transform-object-rest-spread",
              "transform-react-jsx"
            ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // inject CSS to page
          'css-loader', // translates CSS into CommonJS modules
          'sass-loader' // compiles Sass to CSS
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|PNG|jpe?g|gif)(\?\S*)?$/,
        loader: 'url-loader?limit=100000&name=/public/images/[name].[ext]'
      }
    ]
  },

  externals: {
    'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? "warning" : false
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    historyApiFallback: true // fallback pages
  }, 


  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default']
    }),
  ] // end of plugins
};
