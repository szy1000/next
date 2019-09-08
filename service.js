const Koa = require('koa')
// const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx, next) => {
    await next()
  })

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    const {path, method} = ctx
    ctx.body = `<h1>Koa</h1> ${path} , method: ${method}`
    await next()
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
