const axios = require('axios');
const formatter = require('../utils/formatter');

const PREFIXS = new Map([
	['fish', 'O peixe'],
	['bugs', 'O inseto'],
	['sea', 'A criatura marinha'],
]);

const getAnimal = (type, name, message) => {
	axios({
		method: 'get',
		url: `https://acnhapi.com/v1/${type}/${name}`,
	}).then((response) => {
		message.reply(formatter.formatReply(PREFIXS.get(type), response.data));
	}).catch(() => {message.reply(`Verifique o nome por favor! Não encontramos ${PREFIXS.get(type)} que você pesquisou`);});

};

module.exports = { getAnimal };