require('./config/config');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')


/* Middleware Body Parser */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())



app.get('/usuario', function(req, res) {
    res.json('Hello World');
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "Se esperaba el nombre",
        });
    } else {
        res.json({
            body
        });
    }


})

app.put('/usuario:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
})

app.delete('/', function(req, res) {
    res.json('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT);
});