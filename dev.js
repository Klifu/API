const app = require('./index');
require('dotenv').config();

app.listen(3000, () => {
	console.log('server started on port 3000');
})