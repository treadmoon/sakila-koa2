const router = require('koa-router')()
const mysql = require('../mysql')
const axios = require("axios")

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
  console.log("data-------------", data);

  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/code', async (ctx, next) => {
  // let repo = await ctx.get('/token', {
  //   grant_type: 'client_credential',
  //   appid: 'wxca31d7609965ebc2',//'wx3d8a075ba51e32ca',
  //   secret: 'eb5bb10322707e9c94dad6c776112cf4'//'f0ff3890d1381e1f7aa2845a8294120f'
  // }, {
  //   'User-Agent': 'koa-http-request'
  // });
  // console.log('repo', repo);

  let res = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
    params: {
      grant_type: 'client_credential',
      appid: 'wxca31d7609965ebc2',//'wx3d8a075ba51e32ca',
      secret: 'eb5bb10322707e9c94dad6c776112cf4'//'f0ff3890d1381e1f7aa2845a8294120f'
    }
  }).then(res => {
    if (res.status === 200) {
      return axios.get('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
        params: {
          access_token: res.data.access_token,
          type: 'jsapi'
        }
      })
    }
  })
  console.log('res========================',res.data);
  
  ctx.body = {
    res:'ase',
    data:JSON.parse(JSON.stringify(res.data))
  }

})

module.exports = router

