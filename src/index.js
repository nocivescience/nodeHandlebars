import express from 'express';
import {engine} from 'express-handlebars';
import path from 'path';
// import {query} from './db';
import pgk from 'pg';
const app = express();
const port = 3000;
const { Pool } = pgk;
const pool= new Pool({
  user: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'postgres',
  password: 'comenius12',
})
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}))
app.use(express.urlencoded({ extended: true }));
app.set('view engine', '.hbs');
app.get('/', async(req, res) => {
  const result= await pool.query('SELECT * FROM cuadernos');
  res.render('index', {result: result.rows});
});
app.post('/mi_form', async(req, res) => {
  const {asignatura, nota, titulo}= req.query;
  const query= 'INSERT INTO cuadernos (asignatura, nota, titulo) VALUES ($1, $2, $3)';
  const values= [asignatura, nota, titulo]; 
  try{
    const result= await pool.query(query, values);
    res.send('Datos guardados');
  }catch(error){
    console.log(`Error al guardar los datos: ${error}`);
    res.status(500).send('Error al guardar los datos');
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));