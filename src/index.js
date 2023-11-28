const express = require('express');
const app = express();
const port = 3000;
const {engine} = require('express-handlebars');
app.engine('handlebars', engine());
app.set('views', './src/views');
app.set('view engine', '.hbs');
app.engine('.hbs', engine({extname: '.hbs'}));
app.get('/', (req, res) => {
    const data={
        name: 'John Doe',
        age: 25,
        isMale: true,
        hobbies: ['reading', 'coding', 'swimming']
    };
    res.render('home', data);
});
app.listen(port, () => console.log(`Server listening on port ${port}!`));