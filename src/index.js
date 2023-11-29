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
app.use(express.urlencoded({extended: false}));
app.get('/', async(req, res) => {
    const data = await db.query('SELECT * FROM "cuadernos"')
    res.render('home', {data: data.rows});
});
app.post('/formy', async(req, res) =>{
    const {asignat, nota, titu} = req.body;
    await db.query('INSERT INTO "cuadernos" (asignatura, nota, titulo) VALUES ($1, $2, $3)', [asignat, nota, titu]);
    res.redirect('/');
    console.log('datos guardados en la base de datos');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));