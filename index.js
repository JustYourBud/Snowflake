// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token, botId, channelId } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
        console.log('Ready!');
});

// When the client sees a message, send the ID to the snowflake channel.
client.on('messageCreate', (message) => {
        if(message.author.id === botId) return;
        client.channels.cache.get(channelId).send(message.id);
})

// Login to Discord with your client's token
client.login(token);
