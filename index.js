const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const app = express();
app.use(express.json()); 

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const PORT = process.env.PORT || 3000;

client.once('ready', () => {
    console.log(`Connected as ${client.user.tag}!`);
});

function sendMessageToChannel(channelId, message) {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
        channel.send(message)
            .then(() => console.log(`Message envoyé: ${message}`))
            .catch(console.error);
    } else {
        console.error('Channel not found');
    }
}

app.post('/', (req, res) => {
    console.log('Webhook datas received:', req.body);

    const event = req.body;
    const payload = event.payload;
    const tournament_id = payload.id;
    const tournament_url = `https://faceit.com/en/championship/${tournament_id}`

    console.log('Event Type:', event.event);
    console.log('Payload:', payload);

    switch (event.event) {
        case 'championship_created':
            const message = `🎉 **New Tournament Created!** 🎉\n\n` +
                `**Name:** ${payload.name}\n` +
                `**Game:** ${payload.game}\n` +
                `**Type:** ${payload.type}\n` +
                `**Status:** ${payload.status}\n` +
                `**Slots:** ${payload.slots}\n` +
                `**Total Rounds:** ${payload.total_rounds}\n\n` +
                `Check out the tournament [here](${tournament_url})!\n` +
                `Organized by: [Radiant Reapers](https://www.faceit.com/eng/inv/hTG5HC7)\n` + // You have to change for your organisation
                `Stay tuned for more updates!`;
            sendMessageToChannel('DISCORD_CHANNEL_ID_TO_PUT_HERE', message); //Change DISCORD_CHANNEL_ID_TO_PUT_HERE with your own discord channel ID
            break;
        case 'championship_cancelled':
            console.log('Payload Datas:', payload);
            const cancelledMessage = `❗ **Tournament Cancelled** ❗\n\n` +
                `Check out the tournament details [HERE](${tournament_url})\n` +
                `Organized by: [Radiant Reapers](https://www.faceit.com/eng/inv/hTG5HC7)\n` + // You have to change for your organisation
                `Sorry for the inconvenience.`;
            sendMessageToChannel('DISCORD_CHANNEL_ID_TO_PUT_HERE', cancelledMessage); //Change DISCORD_CHANNEL_ID_TO_PUT_HERE with your own discord channel ID
            break;
        case 'championship_started':
            const startedMessage = `🏆 **Tournament Started** 🏆\n\n` +
                `The tournament **${payload.name}** has started!\n` +
                `Check out the tournament details [here](${tournament_url})\n` +
                `Follow the action live on our Twitch channel: [Twitch Radiant Reapers](https:/https://www.twitch.tv/radiantreapers357)\n\n` +
                `Organized by: [Radiant Reapers](https://www.faceit.com/eng/inv/hTG5HC7)\n` + // You have to change for your organisation
                `Good luck to all participants!`;
            sendMessageToChannel('DISCORD_CHANNEL_ID_TO_PUT_HERE', startedMessage); //Change DISCORD_CHANNEL_ID_TO_PUT_HERE with your own discord channel ID
            break;
        case 'match_status_ready':
        case 'match_status_finished':
            const match_url = `https://faceit.com/en/matches/${payload.id}`;
            const matchMessage = `🏅 **Match Update** 🏅\n\n` +
                `**Tournament:** ${payload.tournament ? payload.tournament.name : 'Unknown Tournament'}\n` +
                `**Match ID:** ${payload.id}\n` +
                `**Status:** ${payload.status}\n` +
                `**Team 1:** ${payload.teams && payload.teams[0] ? payload.teams[0].name : 'Unknown'}\n` +
                `**Team 2:** ${payload.teams && payload.teams[1] ? payload.teams[1].name : 'Unknown'}\n\n` +
                `Check the match details [here](${match_url})\n` +
                `Organized by: [Radiant Reapers](https://www.faceit.com/eng/inv/hTG5HC7)`; // You have to change for your organisation
             sendMessageToChannel('DISCORD_CHANNEL_ID_TO_PUT_HERE', matchMessage); //Change DISCORD_CHANNEL_ID_TO_PUT_HERE with your own discord channel ID
            break;

        default:
            console.log(`Event not supported : ${event.event}`);
    }

    res.sendStatus(200); 
});

app.listen(PORT, () => {
    console.log(`Webhook Server started on port: ${PORT}`);
});

client.login(DISCORD_TOKEN);
