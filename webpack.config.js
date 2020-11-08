const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js',
    teams: './src/teams.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].bundle.js'
  },
  plugins: [new ESLintPlugin({
    files: ['src/*', 'src/components/*'],
    fix: true
  })],
  externals: {
    materialize: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js', 'M']
  },
  externalsType: 'script'
}
