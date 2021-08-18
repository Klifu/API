const app = require('express')();
const cors = require('cors');
const { PokemonService } = require('./service');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const { PokemonController } = require('./controller/controller');

const pokemonRouter = require('./routes/pokemonRoutes');

app.use(cors());
app.use(swaggerUI.serve);
app.use('/', pokemonRouter);

module.exports = app;