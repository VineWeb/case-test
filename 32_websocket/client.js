const WebSocket = require('ws');

const socket = new WebSocket('ws://localhost:3000');

socket.on('open', () => {
  console.log('Connected to server');

  // 发送消息到服务器
  socket.send('Hello, server!');
});

socket.on('message', (message) => {
  console.log(`Received message from server: ${message}`);
  console.log('are you ok')
});

socket.on('close', () => {
  console.log('Connection closed');
});
