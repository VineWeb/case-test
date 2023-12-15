const http = require('http')
const server1 = http.createServer()
const { Server, WebSocket } = require('ws');
const socket = new WebSocket('ws://localhost:3000')
// 服务端
const server = new Server({server: server1})
socket.on('open', () => {
  console.log('服务器已连接')
  // 可以发送信息操作
  socket.send('孙悟空大闹天宫!!')
  // socket.send(JSON.stringify({name: '孙悟空', title: '孙悟空大闹天宫!!'}))
})
socket.on('message', (message) => {
  console.log('接收服务端发送的消息: '+message)
})
socket.on('close', () => {
  console.log('客户端接收到服务端链接已断开')
})

// 服务端
server.on('connection', (socket) => {
  console.log('客户端在服务端已经连接成功!')
  socket.on('message', (message) => {
    console.log('接收到客户端发送过来的数据: '+message)
    socket.send('我是服务端的服务3000发送过来的信息')
  })
})

server1.listen(3000, () => {
  console.log('启动 http://localhost:3000')
})