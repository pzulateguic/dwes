const express = require('express');
const app = express();
const port = 3000;

app.get('/dias', (req, res) => {
    res.send('good morning');
});

app.get('/tardes', (req, res) => {
    res.send('good afternoon');
});

app.get('/noches', (req, res) => {
    res.send('good nigth');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});