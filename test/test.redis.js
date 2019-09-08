const Redis = require('ioredis')

const redis = new Redis({
  port: 6379
})

show = async () => {
  const keys = await redis.keys('*')
  await redis.set('name', 'szy')
  console.log(keys)

  // const keys = await redis.get('b')
  console.log(await redis.get('name'))

}

show()
