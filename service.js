const Airtable = require('airtable');

class PokemonService {
	_base = new Airtable({ apiKey: process.env.API_KEY }).base(process.env.BASE);

	async get() {
		try {
			let records = await this._base('Pokemons').select({ view: 'Grid view' }).all();
			let pokemons = records.map(record => ({
				id: record.get('id'),
				name: record.get('name'),
				type: record.get('type'),
				sprite: record.get('sprite')[0].url
			}))

			return { pokemons }
		} catch (error) {
			return { undefined, error };
		}
	}
}

module.exports = {
	PokemonService
}