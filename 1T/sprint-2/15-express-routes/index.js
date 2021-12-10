const express = require('express');
const querystring = require('querystring');
const animals = require('./animals');
const server = express();

server.get('/header/:token', function (req, res) {
    if(req.params.token === undefined) {
        const error = {
            "code": 401,
            "error": "Unauthorized",
            "message": "Error: Set a token to login"
        }
        res.status(401).send(error);
    } else {
        console.log(req.params.token);
        res.status(200).send();
    }
});

server.get('/params/:name', function (req, res) {
    const { name } = req.params;
    res.status(200).send(`Hola ${name}`);
});

function numbersSum(n) {
    let result = 0;
    for(let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

server.get('/query/*', function (req, res) {
    const query = querystring.parse(req.url.substring(7));
    res.status(200).send(`${numbersSum(query.number)}`);
});

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.post('/body/:key', function (req, res) {
    const { body, params: { key } } = req;
    res.status(200).send(`<li>${body[key]}</li>`);
});

server.use('/animals', animals);

server.use('/', function (req, res) {
    const error = {
        "code": 404,
        "error": "Not Found",
        "message": "Error: Path not found"
    }
    res.status(404).send(error);
});

server.listen(3000);