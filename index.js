const app = require('express')();
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const pokemonRouter = require('./routes/pokemonRoutes');

app.use(cors());
app.use(swaggerUI.serve);
app.get('/', swaggerUI.setup(swaggerDoc));

app.use('/pokemons', pokemonRouter);

module.exports = app;