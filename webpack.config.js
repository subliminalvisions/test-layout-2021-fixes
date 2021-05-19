const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
  
module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
      },
      devServer: {
        contentBase: './deploy',
        open: true
      },      
      module: {
        rules: [
          {
            test: /\.(less)$/,
            use: [{
                loader: 'style-loader' // creates style nodes from JS strings
            }, {
                loader: 'css-loader' // translates CSS into CommonJS
            }, {
                loader: 'less-loader' // compiles Less to CSS
            }]
          },
            {
            test: /\.(png|jp(e*)g|svg)$/,  
            use: [{
                loader: 'url-loader',
                options: { 
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'assets/[hash]-[name].[ext]'
                } 
            }]
        },
        // {
        //     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        //     loader: 'url-loader?limit=100000' }
        // {
        //     test: /\.(png|jpg|gif)$/i,
        //     use: [
        //       {
        //         loader: 'url-loader',
        //         options: {
        //           limit: 8192
        //         }
        //       }
        //     ]
        //   }
    ]
      },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      title: "Webpack Output test2",
    }),
  ],
  

  
};
