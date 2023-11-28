const express = require('express');
const app = express();
const {engine} = require('express-handlebars');
const port = 3000;
app.set('views', './src/views');
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
}));
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
    const data ={
        name: 'John Doe',
        message: 'Hello World',
    }
    res.render('home', data);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));