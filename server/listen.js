const app = require('./app/app');
const port = 5000;

app.listen(5000, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
