/*
* 参考 https://juejin.cn/post/6844904066401697799
*/
import { createApp } from 'vue'
import App from './index.vue'
// import Uicomp from '../package/uicomp'
import Uicomp from 'uicomp'

const app = createApp(App)
app.use(Uicomp)
app.mount('#app')