const express = require('express');
const app = express();

app.use(require('../routes/usuario'));
app.use(require('./login'));


module.exports = app;