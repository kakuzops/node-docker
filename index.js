const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

const routes = require('./routes/route.js');

app.use('/api/oportunidade', routes);

console.log(routes);

mongoose
    .connect('mongodb://db:27017/crud-node-mongo-docker', {
        useNewUrlParser: true
    })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });

app.listen(9000, () => console.log('Server ativo na porta 9000'));