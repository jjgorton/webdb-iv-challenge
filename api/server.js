const express = require('express');
const helmet = require('helmet');

const dish = require('../dish/dish-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/dish', dish);

// sanity check route
server.get('/', (req, res) => {
	res.status(200).send('<h1>Cook Book API</h1>');
});

module.exports = server;
