const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
    entry: {
        app : "./src/app.js",
        service: "./src/service-worker.js",
        favorite: "./src/favorite.js"
    },
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: "[name].bundle.js"
    },
    plugins: [new ESLintPlugin({
        files: ['src/*', 'src/components/*'],
        fix: true,
    })]
}
