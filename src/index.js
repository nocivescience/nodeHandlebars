const express = require('express');
const db = require('./db');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.get('/', async(req, res) => {
    const data = await db.query('SELECT * FROM "cuadernos"')
    res.render('home', {data: data.rows});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));