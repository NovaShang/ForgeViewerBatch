import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import TasksPage from './components/TasksPage.vue'
import HistoryPage from './components/HistoryPage.vue'
import DialogSetting from './components/DialogSetting.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons/iconfont/material-icons.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.component('DialogSetting', DialogSetting)
const routes = [
    { path: '/tasks', component: TasksPage },
    { path: '/history', component: HistoryPage },
]

/* eslint-disable no-new */
new Vue({
    components: { App },
    router: new VueRouter({ routes }),
    template: '<App/>'
}).$mount('#app')