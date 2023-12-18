// 创建WebSocket连接
const { WebSocket } = require('ws')
const { generateUrl, genParams, getParams, getWebsocketUrl } = require('./utils')
const socket = new WebSocket(generateUrl());

// 处理连接打开事件
socket.addEventListener('open',async (event) => {
    // 执行身份验证（如果需要）
    socket.send(JSON.stringify(await genParams()));
});

// 处理接收消息事件
socket.addEventListener('message', (event) => {
    const response = JSON.parse(event.data);
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
