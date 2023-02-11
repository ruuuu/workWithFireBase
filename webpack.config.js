const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'), // рабо папка для раразботки
    entry: {
        main: './main.js',  // точка входа, здесь пишем import всех модулей
    },
    output: {
        filename: './js/[name].js', // минимизированнеы  файлы в папке dist
        path: path.resolve(__dirname, 'dist')  //  рпрка продакшена
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
};