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

const prefix = '-';
client.on('ready', () => {
	console.log('Bot online!');
});


client.on('messageCreate', async (message) => {
	if (message.author.bot || !message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	let args = commandBody.split(' ');
	const command = args.shift().toLowerCase();
	args = args.join('_');

	if (command === 'f' || command === 'fish') {
		request.getAnimal('fish', args, message);
	}
	else if (command === 'b' || command === 'bug') {
		request.getAnimal('bugs', args, message);
	}
	else if (command === 's' || command === 'sea') {
		request.getAnimal('sea', args, message);
	}
});

client.login(process.env.BOT_TOKEN);
