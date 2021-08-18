const express = require('express');
const swaggerUI = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const { PokemonService } = require('./../service');
const { PokemonController } = require('./../controller/controller');

const pokemonController = new PokemonController(new PokemonService());
const router = express.Router();

router
    .route('/')
    .get(swaggerUI.setup(swaggerDoc));

router
    .route('/pokemons')
    .get(async (req,res) => pokemonController.getAllPokemons(req,res));

module.exports = router;