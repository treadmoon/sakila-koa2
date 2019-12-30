const router = require('koa-router')()
const mysql = require('../mysql')


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  let data = await mysql.query()
  console.log("data-------------",data);
  
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
