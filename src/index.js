import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';
import {query} from './db';
const app = express();
const port = 3000;
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}))
app.set('view engine', '.hbs');
app.get('/', async(req, res) => {
  const result= await query('SELECT * FROM users');
  res.render('index', {result: result.rows});
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));