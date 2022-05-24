//postcss.config.js

module.exports = {
    plugins: {
      'postcss-px-to-viewport-update': {
       unitToConvert:"px",// 要转化的单位       
       viewportWidth:1920,// UI设计稿的宽度   
    //    propList:['*','!font-size'],
       propList:['*'],
      //  exclude:[/node_modules/,/src/]
       include:[/auto/]
      }
    }
  }
  