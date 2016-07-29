import Vue from 'vue'

import Router from 'vue-router'

Vue.use(Router)

/*引入页面通用组件*/
import view from './view.vue'

let App = Vue.extend({})

// routing
let router = new Router()

router.map({
    '/': {
        component: view
    },
    '/page/:page': {
        name: 'pageRoute',
        component: view
    }
})

router.start(App,'#app')