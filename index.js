const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')

const app =  new Koa()
const router = new Router()



// 注册路由
mockList.forEach(item => {
  const { url, method, response } = item

  // 类似于 router.get or router.post
  router[method](url, ctx => {
    ctx.body = response(ctx)
  })
})

app.use(router.routes())


app.listen(8111)
