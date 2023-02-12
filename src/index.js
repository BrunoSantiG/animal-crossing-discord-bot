const { Client, GatewayIntentBits } = require('discord.js');
const request = require('./services/requests');

require('dotenv').config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

const PREFIX = '-';
const COMMANDS = ['i', 'info'];

client.on('ready', () => {
	console.log('Bot online!');
});


client.on('messageCreate', async (message) => {
	if (message.author.bot || !message.content.startsWith(PREFIX)) return;

	const commandBody = message.content.slice(PREFIX.length);
	let args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	args = args.join('_');

	if (COMMANDS.includes(command)) {
		Promise.any([
			request.getAnimal('fish', args),
			request.getAnimal('bugs', args),
			request.getAnimal('sea', args),
		]).then((res) => {
			const animal = res.data;
			message.reply(`O ${animal.name['name-USen']} é vendido por ${animal.price} Bells!`);
		}).catch(() => {
			message.reply('Não existe nenhum peixe, inseto ou criatura marinha com esse nome');
		});
	}
});

client.login(process.env.BOT_TOKEN);
