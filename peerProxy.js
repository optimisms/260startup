const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
    // Create a websocket object
    const wss = new WebSocketServer({ noServer: true });

	// Handle the protocol upgrade from HTTP to WebSocket
	server.on('upgrade', (request, socket, head) => {
		wss.handleUpgrade(request, socket, head, function done(ws) {
			wss.emit('connection', ws, request);
		});
  	});
}

module.exports = { peerProxy };