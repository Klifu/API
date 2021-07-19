const app = require('express')();
const cors = require('cors');
const {PokemonService} = require('./service');

app.use(cors());

app.get('/', (req,res) => {
	return res.send("Welcome to klifu API and have fun!");
});


app.get('/pokemons', async (req,res) => {
	const pokemonService = new PokemonService();
	const {pokemons, error} = await pokemonService.get();
	if(error) return res.status(404).send(error);

	return res.status(200).json(pokemons);
})

module.exports = app;