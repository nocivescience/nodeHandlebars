const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.engine('hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs',
}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));