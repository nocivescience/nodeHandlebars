const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');
app.set('views', './src/views');
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));
app.set('view engine', '.hbs');
app.get('/', (req, res) => {
    const data = {
        name: 'World',
        text: 'Hello',
    };
    res.render('home', data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));