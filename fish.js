const axios = require('axios');
const formatter = require('./formatter');

const getFish = (fish, message) => {
	axios({
		method: 'get',
		url: `https://acnhapi.com/v1/fish/${fish}`,
	}).then((response) => {
		message.reply(formatter.formatReply('O peixe', response.data));
	}).catch(() => {message.reply('Peixe não encontrado!');});

};

module.exports = { getFish };