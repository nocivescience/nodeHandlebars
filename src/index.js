const express = require('express');
const database = require('./db');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');
app.engine('handlebars', engine());
app.set('views', './src/views');
app.set('view engine', '.hbs');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.get('/', async(req, res) => {
    const datos= await database.query("SELECT * FROM cuadernos");
    res.render('home', {
      datos: datos.rows
    });
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));