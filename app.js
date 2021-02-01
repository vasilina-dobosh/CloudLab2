var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index', {title: 'Заголовок', message: 'Привет, мой милый друг!!!'});
});

app.get('/page2', function (req, res) {
    res.render('page2', {title: 'Страница 2', message: 'Текст второй страницы'});
});

app.listen(port, function() {
    console.log('Приложение запущено');
});
