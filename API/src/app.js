const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const productos = require('./modules/productos/routes');

const app = express();

// Habilitar CORS
app.use(cors({ origin: 'http://localhost:3000' })); // Permite solicitudes desde el frontend
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('port', config.app.port);

app.use('/api/productos', productos);

module.exports = app;
