const express = require('express')
const cors = require('cors')

const app = express()
const port = 8081
const users = [
  { id: 1, name: 'John', age: 25 }, 
  { id: 2, name: 'Mike', age: 28 }, 
  { id: 3, name: 'Bobo', age: 18 }, 
]
const peoples = [
  { id: 1, name: '张三', age: 25 }, 
  { id: 2, name: '李四', age: 28 }, 
  { id: 3, name: '王五', age: 18 }, 
]
app.use(cors({
  origin: 'http://127.0.0.1:5500', // 允许跨域的源
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的方法
  allowedHeaders: ['Content-Type'], // 允许的自定义头
  exposedHeaders: ['name'], // 暴露的响应头
  optionsSuccessStatus: 200 // 预检请求成功的状态码
}))
// app.options('/getUsers', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'abc, Content-Type')
//   res.setHeader('Access-Control-Max-Age', 3600)
//   res.send()
// })
app.post('/getUsers', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
  res.send(users)
})

app.get('/getPeoples', (req, res) => {
  const { callback } = req.query

  res.send(`${callback}(${JSON.stringify(peoples)})`)

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})