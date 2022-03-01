const express = require('express');
const { engine } = require('express/lib/application');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('public/index')
})

app.listen(5000, (req, res) => {
})