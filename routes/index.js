const router = require('koa-router')()
const mysql = require('../mysql')
const axios = require("axios")
const crypto = require('crypto');

// sha1加密
function sha1(str) {
  let shasum = crypto.createHash("sha1")
  shasum.update(str)
  str = shasum.digest("hex")
  return str
}

// 生成时间戳
function createTimestamp() {
  return parseInt(new Date().getTime() / 1000) + ''
}

// 生成随机串
function createNonceStr() {
  return Math.random().toString(36).substr(2, 15)
}

// 字典排序
function raw(args) {
  var keys = Object.keys(args)
  keys = keys.sort()
  var newArgs = {}
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key]
  })

  var string = ''
  for (var k in newArgs) {
    string += '&' + k + '=' + newArgs[k]
  }
  string = string.substr(1)
  return string
}


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

router.post('/code', async (ctx, next) => {
  console.log('============ctx================');
  console.log(ctx.request.body);
  console.log('===============================');
  let params = ctx.request.body

  if (!ctx.session.ticket) {
    let res = await axios.get('https://api.weixin.qq.com/cgi-bin/token', {
      params: {
        grant_type: 'client_credential',
        appid: params.appid,//'wxca31d7609965ebc2',//'wx3d8a075ba51e32ca',
        secret: params.secret//'eb5bb10322707e9c94dad6c776112cf4'//'f0ff3890d1381e1f7aa2845a8294120f'
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
    ctx.session.ticket = res.data.ticket
  }

  // console.log('ticket========>', ctx.session.ticket);

  var ret = {
    jsapi_ticket: ctx.session.ticket,//上个步骤中获取到的 jsapi_ticket。
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: params.url,
  };

  var string = raw(ret);
  const signature = sha1(string);//
  // console.log('这就是我们需要的签名signature========>', signature);


  ctx.body = {
    appId: params.appid,
    signature,
    ...ret
  }

})

module.exports = router

