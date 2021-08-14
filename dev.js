require('dotenv').config();
const app = require('./index');

app.listen(3000, () => {
	console.log('server started on port 3000');
})