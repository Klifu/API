const app = require('express')();


app.get('/', (req,res) => {
	return res.send("Welcome to klifu API");
});


app.get('/pokemons', (req,res) => {
	return res.status(200).send("list of pokemons in the game");
})

module.exports = app;