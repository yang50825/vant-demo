import Vue from 'vue'
import App from './App.vue'

// import Vant from 'vant'
// import 'vant/lib/index.css'

// Vue.use(Vant)
// import { Button } from 'vant'
// Vue.use(Button)
import { Button, Carousel, CarouselItem } from 'element-ui'

Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
