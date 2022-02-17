const express = require('express');

const routes = require('../routes');

module.exports = (expressApp, config) => {
    expressApp.use(express.json({ limit: '50mb' }));
    expressApp.use(express.urlencoded({ limit: '50mb', extended: true }));

    expressApp.use('/', routes);
    expressApp.use((req, res) => res.status(404).send({ message: 'Not Found'}));
};
