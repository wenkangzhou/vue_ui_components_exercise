import Test from './src/index.vue'

// install 是默认的方法,供按需引入。
// 当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。

Test.install = function(app){
  app.component(Test.name, Test)
  return app
}

export default Test