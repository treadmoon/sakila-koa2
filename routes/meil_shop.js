const router = require('koa-router')()

router.prefix('/meil')

router.get('/homePageContent', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = {
      data:{
          slides:[
              {image:'https://pics3.baidu.com/feed/810a19d8bc3eb13599327b0c642ee1d5fc1f4443.jpeg?token=8d78e89dd17f528b50fc501309c35883'},
              {image:'https://aod-image-material.cdn.bcebos.com/5/pic/daaec11c77685b27fb907da9c0fc685f.jpg'},
              {image:'https://i0.hdslb.com/bfs/archive/4e777c068dbdffb617a6505b189ea84514b1008c.jpg'},
          ]
      }
  }
})

module.exports = router
