const app = require('express')();
const {PokemonService} = require('./service');


app.get('/', (req,res) => {
	return res.send("Welcome to klifu API");
});


app.get('/pokemons', async (req,res) => {
	const pokemonService = new PokemonService();
	const {pokemons, error} = await pokemonService.get();
	if(error) return res.status(404).send(error);

	return res.status(200).json(pokemons);
})

module.exports = app;