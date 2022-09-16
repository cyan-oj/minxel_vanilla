const path = require('path'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: [
    path.resolve(__dirname, 'src', 'index.js'),
    path.resolve(__dirname, 'src', 'index.scss')
  ],
  output: {
    path: path.join(__dirname, 'dist'), // bundled file in dist/
    filename: '[name].js'
  }, // webpack will also do some magic for us to create a similar output rule for css!
  module: {
    rules: [
      {
        test: /\.js$/, // applies to js files
        use: ['babel-loader'], // transpiles your js
        exclude: /node_modules/, // don't transpile node modules
      },
      {
        test: /\.s?[ac]ss$/, // applies to css/scss/sass files
        use: [
          MiniCssExtractPlugin.loader, // create bundled css file
          {
            loader: 'css-loader', // resolves @import statements
            options: { url: false } // don't resolve url() statements
          },
          'sass-loader', // compiles sass to css
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
};

module.exports = (env, argv) => { 
  if (argv.mode === 'production') { // creates a separate main.js.map file.
    config.devtool = 'source-map'; // which helps shrink the main.js file
  } else {
    config.devtool = 'eval-source-map'; // puts all mapping data in main.js
  }                                     // faster for dev, slow in production

  return config;
}