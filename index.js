const app = require('express')();
const cors = require('cors');
const { PokemonService } = require('./service');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const { PokemonController } = require('./controller');

const pokemonService = new PokemonService();
const allPokemons = new PokemonController(pokemonService);

app.use(cors());

app.use(swaggerUI.serve);
app.get('/', swaggerUI.setup(swaggerDoc));

app
	.route('/pokemons')
	.get(allPokemons.getPokemons());

module.exports = app;