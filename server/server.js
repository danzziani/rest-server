require('./config/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Index routes
app.use(require('./routes/index'))

//Habilitar la carpeta public
app.use(express.static('/home/adrian/Escritorio/node/07-rest-server/public'));
//console.log(path.resolve(__dirname,'../public'));


mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});