const app = require('express')();
const cors = require('cors');
const { PokemonService } = require('./service');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

app.use(cors());

app.use(swaggerUI.serve );
app.get('/', swaggerUI.setup(swaggerDoc));


app.get('/pokemons', async (req, res) => {
	const pokemonService = new PokemonService();
	const { pokemons, error } = await pokemonService.get();
	if (error) return res.status(404).send(error);

	return res.status(200).json(pokemons);
})

module.exports = app;