const axios = require('axios');
const formatter = require('./formatter');

const getSeaCreature = (seaCreature, message) => {
	axios({
		method: 'get',
		url: `https://acnhapi.com/v1/sea/${seaCreature}`,
	}).then((response) => {
		message.reply(formatter.formatReply('A criatura marinha', response.data));
	}).catch(() => {message.reply('Inseto não encontrado!');});

};

module.exports = { getSeaCreature };