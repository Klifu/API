class PokemonController {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }

    async getPokemons(req, res) {
        const { pokemons, error } = await this.pokemonService.get();
        if (error) return res.status(404).send(error);

        return res.status(200).json(pokemons);
    }
}

module.exports = {
    PokemonController
}