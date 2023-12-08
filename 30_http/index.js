// 一. HTTP 协议基础
/** 请解释一下HTTP协议是什么, 它的工作原理是什么? */

class Http {
  // HTTP(Hypertext Transfer Protocol) 是一种用于在网络上传输超文本(如: HTML、XML、图片等)的协议。它是一种无状态协议，意味着每个请求都是独立的，服务器不会在多个请求之间保留任何关于客户端状态的信息
  constructor() {
    this.init()
  }
  // HTTP的工作原理可以简要概括为以下几个步骤:

  /***
   * 1. 建立连接: 客户端通过与服务器建立TCP连接来发起HTTP请求, 默认情况下, HTTP使用端口 80。
   * 2. 发送请求： 客户端向服务端发送一个HTTP请求，请求中包含要访问的资源的URL， 请求方法(GET, POST等)以及其他必要的信息
   * 3. 处理请求: 服务器接收到请求后, 根据请求中的信息决定如何处理, 服务器可能需要查询数据库、执行某些操作或者直接返回静态文件等
   * 4. 发送响应： 服务器将处理结果封装在HTTP响应中， 并返回客户端。响应包括一个状态码（表示请求的成功或失败）、响应头（包含关于响应的元信息）以及响应体（包含实际的数据，如HTML页面或文件）
   * 5. 断开连接： 客户端接收到服务器的响应后，如果不需要保持持久连接，它会关闭TCP连接。
   * *** HTTP协议是无状态的，这意味着每个请求都是独立的，服务器不会保留任何关于客户端的状态信息。为了处理状态，例如在不同请求之间保持用户登录状态，通常使用一些机制，如Cookies或者session。
   * *** 总的来说，HTTP协议是Web中用于客户端和服务端之间通信的基础协议， 它定义了消息的故事，传输方式以及双方的行为规范
   */
  init() {
    this.tcpConnect()
    this.sendRequest()
    this.processRequest()
    this.sendResponse()
    this.tcpDisconnect()
  }

  tcpConnect() {
    console.log('建立连接')
  }
  sendRequest() {
    console.log('发送请求')
  }
  processRequest() {
    console.log('处理请求')
  }
  sendResponse() {
    console.log('发送响应')
  }
  tcpDisconnect() {
    console.log('断开连接')
  }

}

const http = new Http()


const a = { value: 0 }
a.valueOf = function () {
  return this.value += 1
}

console.log(a == 1 && a == 2 && a == 3)


const f1 = (a=1, b=2, c=0, d, e) => {
  console.log("f1: ", a, b)
  return a+b+c
}

const sum = (a) => {
  return a
}

const total = sum(f1(3, 2))
console.log(total, 'total')




