const express = require('express');
const db = require('./db');
const app = express();
const {engine} = require('express-handlebars');
const port = 3000;
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.use(express.urlencoded({extended: false}));
app.get('/', async(req, res) => {
    const data = await db.query('SELECT * FROM cuadernos');
    res.render('index', {data: data.rows});
});
app.post('/mi_formulario', async(req, res) => {
    const {mi_asignatura, mi_nota, mi_titulo}=req.body;
    try {
        await db.query('INSERT INTO cuadernos (asignatura, nota, titulo) VALUES ($1, $2, $3)', [mi_asignatura, mi_nota, mi_titulo]);
        res.redirect('/');
        console.log('Cuaderno guardado');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al guardar el cuaderno');
    }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));