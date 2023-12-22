const app = require('./app/app');
// const port = 5000;
const { PORT = 9090 } = process.env;

app.listen(5000, () => {
	console.log(`Listening on ${PORT}...`);
});
