
let list = [
    {name:"陕西新鲜红富士",price:36,img:"https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/2271279753/O1CN015jXnAT2LuvZR2fQlc_!!2271279753.jpg_430x430q90.jpg"},
    {name:"吊带连衣裙",price:139,img:"https://gd4.alicdn.com/imgextra/i3/1051127998/O1CN01EwBlck28x8T89g3d7_!!1051127998.jpg_400x400.jpg"}
]
const apis= [

    // 获取商品列表哦
    {
      url: '/mock/zSys-project-cjs-banZu/plist',
      method: 'get',
      timeout:100,  //设置响应时间
      response:() => {
        return{
          "msg": "操作成功",
          "code": 200,
          "data":[{
            "pname": "混打混合赛",
            "id": "a5d79aeed2194cc89be0b7d14a826cbf"
        },]
      }
      },
    },
    {
      url: '/mock/z-sys-statistics/list',
      method: 'get',
      timeout:100,  //设置响应时间
      response:() => {
        return{
          "msg": "操作成功",
          "code": 200,
          "data":[{
            "type": "0",
            "countId": "be6efe71748349e58d6935372a7d3cd5",
            "countName": "先锋",
            "countNum": 2,
            "totalCount": 39,
            "banZuList": [
                {
                    "type": "1",
                    "countId": "5a9f15ce09994812b27fcf7f8167b33a",
                    "countName": "测试",
                    "countNum": 2,
                    "totalCount": null,
                    "banZuList": null,
                    "cjsList": null,
                    "gongZhongList": null
                }
            ],
            "cjsList": [
                {
                    "type": "2",
                    "countId": "e253d5c310d540c6832f55cc196267d5",
                    "countName": "测试单位",
                    "countNum": 2,
                    "totalCount": null,
                    "banZuList": null,
                    "cjsList": null,
                    "gongZhongList": null
                }
            ],
            "gongZhongList": null
        },]
      }
      },
    },

  ];
  
  export default apis;
  