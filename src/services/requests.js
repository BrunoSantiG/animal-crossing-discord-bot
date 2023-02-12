const axios = require('axios');


const getAnimal = (type, name) =>
	axios({
		method: 'get',
		url: `https://acnhapi.com/v1/${type}/${name}`,
	});


module.exports = { getAnimal };