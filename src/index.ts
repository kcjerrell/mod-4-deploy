import dotenv = require('dotenv');
dotenv.config();

import express = require('express');

const PORT = process.env.PORT || 5000;
const server = express();

server.get('/', (req, res) => {
	res.status(200).send("holler");
});

server.listen(PORT, () => {
	console.log(`I am listening at ${PORT}`)
})

