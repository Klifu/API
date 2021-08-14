const app = require('express')();
const cors = require('cors');
const { PokemonService } = require('./service');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const { PokemonController } = require('./controller');

const pokemonController = new PokemonController(new PokemonService());

app.use(cors());

app.use(swaggerUI.serve);
app.get('/', swaggerUI.setup(swaggerDoc));

app.get('/pokemons', async (req,res) => pokemonController.getAllPokemons(req,res));

module.exports = app;