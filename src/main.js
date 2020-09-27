import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false
Vue.filter('formatData',function(i){
  const date = new Date(i)
  const time = new Date().getTime()-date.getTime()
  if((time/1000)<30){
    return (time/1000)+'刚刚'
  }else if((time/1000)<60){
    return parseInt(time/1000)+'秒前'
  }else if((time/60000)<60){
    return parseInt(time/60000)+'分钟前'
  }else if((time/3600000)<24){
    return parseInt(time/3600000)+'小时前'
  }else if((time/86400000)<31){
    return parseInt(time/86400000)+'天前'
  }else if((time/2592000000)<12){
    return parseInt(time/2592000000)+'月前'
  }
})
Vue.filter('tabFormatter',function(i){
  if(i.good == true){
    return '精华'
  }else if(i.top == true){
    return '置顶'
  }else if(i.tab == 'ask'){
    return '问答'
  }else if(i.tab == 'share'){
    return '分享'
  }else{
    return '招聘'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



