const router = require('koa-router')()

router.prefix('/meil')


router.get('/homePageContent', function (ctx, next) {
    //   ctx.body = {
    ctx.success({
        slides: [
            { image: 'https://i0.hdslb.com/bfs/archive/4e777c068dbdffb617a6505b189ea84514b1008c.jpg' },
            { image: 'https://i0.hdslb.com/bfs/article/8d5389ec101f709886c4ab5a682e131e89145736.jpg@1075w_602h.webp' },
            { image: 'https://i0.hdslb.com/bfs/article/f63e3250ceb738d9e2cbd271568122a18c94e35d.jpg@1280w_890h.webp' },
        ],
        category:[
            { image:'https://dss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/8644ebf81a4c510f690e58b66e59252dd52aa550.jpg'},
            { image:'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/%E5%A4%A9%E7%8C%AB.png'},
            { image:'https://dss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/super/pic/item/3bf33a87e950352a074f80a45d43fbf2b2118b74.jpg'},
            { image:'https://dss1.baidu.com/-4o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/8435e5dde71190ef9ad03773c01b9d16fdfa6077.jpg'},
            { image:'https://dss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/super/pic/item/21a4462309f790520734e29202f3d7ca7bcbd577.jpg'},
            { image:'https://dss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/super/pic/item/8c1001e93901213f58f7f4705ae736d12e2e9552.jpg'},
        ],
        advertesPicture:{
            PICTURE_ADDRESS:'https://img12.360buyimg.com/cms/jfs/t1/98627/40/13289/22598/5e553186E5006aa1c/4703ca13eaf5fee4.jpg'
        },
        connect:{
            leaderImage:'https://img12.360buyimg.com/cms/jfs/t1/107678/2/5886/119643/5e410a22Ebf4f6ce6/d723f4218876c887.jpg',
            leaderPhone: '18948726762',
        },
        recommendList:[
            { image:'https://img12.360buyimg.com/n7/jfs/t1/91087/36/12227/66469/5e44f450E4a424f4e/7d23ad95ca25f0b4.jpg',mallPrice:'998',price:'9998'},
            { image:'https://img10.360buyimg.com/n7/jfs/t1/55065/34/14866/200462/5dc10498E4b67161e/a86051994269baf5.jpg',mallPrice:'9198',price:'91998'},
            { image:'https://img14.360buyimg.com/n7/jfs/t1/55866/5/1032/344966/5cebc636Ecd6d4f7a/d4793fc2c49d6f38.jpg',mallPrice:'2998',price:'29998'},
            { image:'https://img11.360buyimg.com/n7/jfs/t1/46883/1/8966/830306/5d67adf1E06392365/332a5804de9bbf14.png',mallPrice:'9938',price:'99938'},
            { image:'https://img13.360buyimg.com/n7/jfs/t1/85650/39/6988/152308/5df7533bEfb5904be/8bda56c1434e9380.jpg',mallPrice:'98',price:'1998'},
        ],
        floorGoodsList:[
            {image:'https://img30.360buyimg.com/sku/jfs/t1/89295/37/7953/448673/5e00919fE571d5026/11f075c4dd8cecc7.jpg',title:''},
            {image:'https://img14.360buyimg.com/n7/jfs/t1/74458/14/13656/366787/5daffebeEbc45c4dd/cbcc7cb1204a0c4a.jpg',title:''},
            {image:'https://img10.360buyimg.com/n7/jfs/t1/46017/4/8975/202175/5d687ce6Ec56a2dbf/e5c79e9df3356c5c.jpg',title:''},
            {image:'https://img12.360buyimg.com/n7/jfs/t1/42573/12/12781/233056/5d5fcd46Ee59533e4/14423efb54b6a703.jpg',title:''},
            {image:'https://img11.360buyimg.com/n7/jfs/t1/105615/30/5624/318887/5def0be8E8ab70812/1c0e7284dd1736ed.jpg',title:''},
        ]
    })


})

module.exports = router
