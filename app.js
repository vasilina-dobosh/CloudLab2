var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('index', {title: 'Заголовок', message: 'Тут текст!'});
});

app.get('/page3', function (req, res) {
    res.render('page2', {title: 'Страница 2', message: 'Текст второй страницы'});
});

app.listen(8080, function() {
    console.log('Приложение запущено');
});