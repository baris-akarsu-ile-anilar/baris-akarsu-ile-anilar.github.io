import Vue from 'vue'
import App from './App.vue'
import router from './router'

import GlobalComponents from './global-components'


GlobalComponents.forEach(component => {
  Vue.component(component.name, component)
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
