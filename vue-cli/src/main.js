import Vue from 'vue'
import App from './App.vue'
// import한 Component 파일 (single file component)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// var App = {
//   template : '<div>app</div>'
// }
// new Vue({
//   el : '#app',
//   components : {
//     'app' : App
//   },
//   render : h => h(App)
// })