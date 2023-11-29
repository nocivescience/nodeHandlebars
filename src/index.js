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
app.use(express.urlencoded({extended: false}));
app.get('/', async(req, res) => {
    const datos= await database.query("SELECT * FROM cuadernos");
    res.render('home', {
      datos: datos.rows
    });
});
app.post('/formy', async(req, res) =>{
  const {asignat, nota, titu}=req.body;
  try{
    await database.query("INSERT INTO cuadernos (asignatura, nota, titulo) VALUES ($1, $2, $3)", [asignat, nota, titu]);
    res.redirect('/');
    console.log("Datos insertados");
  }catch(e){
    console.log(`Error: ${e}`);
  }
})
app.listen(port, () => console.log(`Server listening on port ${port}!`));