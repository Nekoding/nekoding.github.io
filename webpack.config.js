const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js',
    teams: './src/teams.js'
  },
  output: {
    path: path.resolve(__dirname, './assets/js'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new ESLintPlugin({
      files: ['src/*', 'src/components/*'],
      fix: true
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './src/sw.js',
      swDest: '../../sw.js',
      manifestTransforms: [async (manifestEntries) => {
        const manifest = manifestEntries.map(entry => {
          entry.url = './assets/js/' + entry.url
          return entry
        })
        return { manifest }
      }]
    })
  ],
  externals: {
    materialize: ['https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js', 'M']
  },
  externalsType: 'script'
}
