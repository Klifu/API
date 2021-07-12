const app = require('express')();


app.get('/', (req,res) => {
	return res.send("Get random pokemon to catch");
})

module.exports = app;