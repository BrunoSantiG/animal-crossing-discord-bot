const axios = require('axios');
const formatter = require('./formatter');

const getBug = (bug, message) => {
	axios({
		method: 'get',
		url: `https://acnhapi.com/v1/bugs/${bug}`,
	}).then((response) => {
		message.reply(formatter.formatReply('O inseto', response.data));
	}).catch(() => {message.reply('Inseto não encontrado!');});

};

module.exports = { getBug };