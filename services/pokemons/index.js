const app = require('express')();


app.get('/', (req, res) => {
	return res.send("get pokemons list");
})

module.exports = app;