const ws = require('ws');

const PORT = process.env.PORT || 3000;

const wss = new ws.Server({ port: PORT }, () => {
	console.log(`Listening on port ${PORT}`);
});

wss.on('connection', (socket) => {
	socket.send('hi');
});
