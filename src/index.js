const express = require('express');
const app = express();
const db = require('./db');
const {engine} = require('express-handlebars');
const port = 3000;
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}))
app.set('view engine', '.hbs');
app.get('/', async(req, res) => {
  const resultados= await db.query('SELECT * FROM cuadernos');  
  res.render('index', {resultados: resultados.rows});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));