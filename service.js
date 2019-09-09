const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

// const os = require('os')
// console.log('你的剩余内存/M'+os.freemem()/1024/1024);
// console.log('你的CPU'+os.arch());

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()

// console.log('你的剩余内存/M'+os.freemem()/1024/1024);
// console.log('你的CPU'+os.arch());


app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/index/:name', async (ctx) => {
    const name = ctx.params.name
    await handle(ctx.req, ctx.res, {
      pathname: '/index',
      query: { name }
    })
    ctx.respond = false
  })

  router.get('/api/index', (ctx) => {
    ctx.body = {success: true}
    ctx.set('Content-Type', 'application/json')
  })

  server.use(router.routes())


  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
    // const {path, method} = ctx
    // ctx.body = `<h1>Koa</h1> ${path} , method: ${method}`
    // await next()
  })


  server.listen(3000, () => {
    console.log('listening on 3000')
  })
})




// const server = new Koa()

// const router = new Router()
//
// router.get('/test', (ctx) => {
//   // ctx.body = 'rouer'
//   ctx.body = {success: true}
//   ctx.set('Content-Type', 'application/json')
// })
//
//
// server.use(router.routes())

// server.listen(3000, () => {
//   console.log('listening on 3000')
// })
