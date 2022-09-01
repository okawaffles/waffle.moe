const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));


app.get('/', (req, res) => {
    res.render('index.ejs');
})


app.listen('3000', () => {
    console.log('Listening on 3000!');
})