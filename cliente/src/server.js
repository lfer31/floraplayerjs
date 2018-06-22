const Express = require('express');
const Cors = require('cors');
const Path = require('path');
const app = Express();

app.use(Cors());
app.use(Express.static(Path.dirname(__dirname) + '/public'));
app.listen('3001',() => console.log('Servidor en 3001'));