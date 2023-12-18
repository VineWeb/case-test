
// 创建WebSocket连接
const { WebSocket, Server } = require('ws');
const socket = new WebSocket('ws://localhost:3009')
const server = new Server({port: 3009})
// 处理连接打开事件
socket.addEventListener('open', (event) => {
    // 执行身份验证（如果需要）
    socket.send('发送信息');
});

// 处理接收消息事件
socket.addEventListener('message', (event) => {
    const response = event.data;
    // 处理星火API的响应
    console.log(response);
});

// 处理连接关闭事件
socket.addEventListener('close', (event) => {
    console.log('WebSocket连接已关闭');
});

// 处理连接错误事件
socket.addEventListener('error', (event) => {
    console.error('WebSocket连接错误', event);
});

server.on('connection', function (e) {
    e.on('message', function (message) {
        console.log(message.toString(), 'message')
    })
})