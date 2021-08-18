const express = require('express');
const { PokemonService } = require('./../service');
const { PokemonController } = require('./../controller/controller');

const pokemonController = new PokemonController(new PokemonService());
const router = express.Router();

router
    .route('/pokemons')
    .get(async (req,res) => pokemonController.getAllPokemons(req,res));

module.exports = router;