## Project

## Install

```bash
npm i @babel/core babel-loader html-webpack-plugin webpack webpack-cli webpack-dev-server --save-dev
npm install copy-webpack-plugin --save-dev
```

## Configurar el WebPack

**webpack.config.js**

```js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin([
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html'
            }
        ])
    ]
}
```

## Configurar script package.js

```json
{
  "scripts": {
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
  }
}
```