const path = require('path')
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  /*
  set the output as a library
  libraryTarget: "commonjs2" The return value of your entry point will be assigned to the module.exports.
  */
  // libraryTarget: 'commonjs2' // THIS IS THE MOST IMPORTANT LINE! :mindblow: I wasted more than 2 days until realize this was the line most important in all this guide.
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/
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
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.txt$/,
        loader: 'raw-loader'
      }, {
        test: /\.(png|PNG|jpg|jpeg|gif|svg|woff|woff2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000&name=/public/images/[name].[ext]'
      }, {
        test: /\.(eot|ttf|wav|mp3|pdf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }

    ]
  },

  // externals: {
  //   'react': 'commonjs react' // this line is just to use the React dependency of our parent-testing-project instead of using our own React.
  // },
  performance: {
    hints: process.env.NODE_ENV === 'production' ? 'warning' : false
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
    })
  ] // end of plugins
}
