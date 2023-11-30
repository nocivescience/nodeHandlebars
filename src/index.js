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
app.use(express.urlencoded({extended: true}));
app.get('/', async(req, res) => {
  const resultados= await db.query('SELECT * FROM cuadernos');  
  res.render('index', {resultados: resultados.rows});
});
app.post('/form', async(req, res) => {
    const {asignatura, nota, titulo}= req.body;
    try{
      await db.query('INSERT INTO cuadernos (asignatura, nota, titulo) VALUES ($1, $2, $3)', [asignatura, nota, titulo]);
      res.redirect('/');
      console.log('datos guardados');
    }catch(error){
      console.log(`el error esta aca: ${error}`);
    }
}); 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));