const express = require('express');
const morgan = require('morgan');
const winston = require('winston');

const server = express();

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize({
            all: true
        }),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

morgan.format('combined', '[:method] :status :url');

server.use(morgan('combined'));

server.get('/admin/:password', function (req, res) {
    if(req.params.password === 'patata') {
        logger.info('200 - OK');
        res.status(200).send('Bienvenid@, disfrute del contenido');
    }
});

function controller(req, res, next) {
    try {
        throw Error('Hmmmm... there is an error over here ....');
    } catch (err) {
        return next(err);
    }
}

function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 400 ? err.statusCode : 400;
    logger.error('401 - Unauthorized');
    res.status(statusCode).send('Acceso restringido, por favor, incluya la palabra secreta en el parámetro "password" en la cabecera de la petición');
}

server.use(controller);
server.use('/admin', errorHandler);

server.listen(3000, () => {
    console.log(`Example app listening`);
});