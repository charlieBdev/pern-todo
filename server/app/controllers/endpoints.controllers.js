const fs = require('fs/promises');

exports.getEndpoints = async (_, res) => {
	try {
		const endpoints = await fs.readFile('endpoints.json', 'UTF-8');
		res.json(JSON.parse(endpoints));
	} catch (error) {
		console.error(error.message);
	}
};
