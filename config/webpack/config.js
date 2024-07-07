const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // 例として、'./src'に実際のエントリーポイントファイルを指定する
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};
