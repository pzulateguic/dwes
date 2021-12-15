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

server.get('/', function (req, res) {
    logger.info('2XX - Success');
    res.status(200).send('OK');
});

function controller(req, res, next) {
    try {
        throw Error('Hmmmm... there is an error over here ....');
    } catch (err) {
        return next(err);
    }
}

function warnHandler(err, req, res, next) {
    const statusCode = err.statusCode < 400 ? err.statusCode : 400;
    logger.warn('4XX - Client Error');
    res.status(statusCode).send({ code: statusCode, message: 'Bad Request' });
}

function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode < 500 ? err.statusCode : 500;
    logger.error('5XX - Server Error');
    res.status(statusCode).send({ code: statusCode, message: 'Internal Server Error' });
}

server.use(controller);
server.use('/warn', warnHandler);
server.use('/error', errorHandler);

server.listen(3000, () => {
    console.log(`Example app listening`);
});