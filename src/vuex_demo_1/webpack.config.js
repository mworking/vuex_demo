/** * Created by lenovo on 2017/5/8. */

const  path = require('path');

module.exports  = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]},

    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js'
        }
    }
}
