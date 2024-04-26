class PubSub {
  constructor() {
    this.messages = {}
    this.listeners = {}
  }
  publish (type, content) {
    const existContent = this.messages[type]
    if (!existContent) {
      this.messages[type] = []
    }
    this.messages[type].push(content)
  }
  subscribe(type, cb) {
    const existListeners = this.listeners[type] 
    if (!existListeners) {
      this.listeners[type] = []
    }
    this.listeners[type].push(cb)
  }
  notify (type) {
    const messages = this.messages[type]
    const subscribers = this.listeners[type] || []
    subscribers.forEach(cb => cb(messages))
  }
}

// 发布者
class Publisher {
  constructor(name, context) {
    this.name = name
    this.context = context
  }
  publish (type, message) {
    this.context.publish(type, message)
  }
}
// 订阅者
class Subscriber {
  constructor(name, context) {
    this.name = name
    this.context = context
  }

  subscribe(type, cb) {
    this.context.subscribe(type, cb)
  }
}


// 实例
const typeA = 'music'
const typeB = 'movie'
const typeC = 'ball'

const pubsub = new PubSub()

const publisherA = new Publisher('publisherA', pubsub)
publisherA.publish(typeA, 'This song is so beautiful!!')
publisherA.publish(typeB, 'This movie is really good!!!')

const publisherB = new Publisher('publisherB', pubsub)
publisherB.publish(typeA, 'Be Young')

const publisherC = new Publisher('publisherC', pubsub)
publisherC.publish(typeB, 'miss ye')
// publisherC.publish(typeC, 'miss Zhu')

const subscribeA = new Subscriber('subscribeA', pubsub)
subscribeA.subscribe(typeA, (res) => {
  console.log('subscribeA receiver', res)
})

const subscribeB = new Subscriber('subscribeB', pubsub)
subscribeB.subscribe(typeC, (res) => {
  console.log('subscriberB received', res)
})

const subscribeC = new Subscriber('subscribeC', pubsub)
subscribeC.subscribe(typeB, (res) => {
  console.log('subscribeC reveived', res)
})


pubsub.notify(typeA)
pubsub.notify(typeB)
pubsub.notify(typeC)


console.log(pubsub.listeners)