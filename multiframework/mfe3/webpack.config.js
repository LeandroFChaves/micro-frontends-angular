const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = options => {
  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "http://localhost:4203/",
      uniqueName: "mfe3"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "mfe3",
          library: { type: "var", name: "mfe3" },
          filename: "remoteEntry.js",
          exposes: {
              './web-components': './src/App.js',
          },        

          shared: ["react", "react-dom"]
        })
    ],
    devServer: {
      port: 4203,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  }
}
