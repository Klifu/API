const app = require('express')();
const Airtable = require('airtable');

var base = new Airtable({ apiKey: process.env.API_KEY }).base(process.env.BASE);

const list = async () => {
	try {
		let records = await base('Table 1').select({ view: 'Grid view' }).all();
		let response = records.map(record => ({
			id: record.get('id'),
			name: record.get('name'),
			type: record.get('type'),
			sprite: record.get('sprite')[0].url
		}))
		return { response }
	} catch (error) {
		return { undefined, error };
	}
}


app.get('/', async (req, res) => {
	let { response, error } = await list();
	if (error) return res.status(404).send(error);

	return res.status(200).json(response);
})

module.exports = app;