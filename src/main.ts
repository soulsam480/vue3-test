import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
store.commit("getJokes")
store.commit("fromDb")
createApp(App).use(store).use(router).mount('#app')
