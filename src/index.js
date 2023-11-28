import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';
const app = express();
const port = 3000;
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}))
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
  const data= {
    title: 'Express Handlebars',
    message: 'This is a message',
  }
  res.render('index', data);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));