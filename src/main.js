// FILE: main.js

import { createApp } from 'vue'
import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
//Vue Router
//import pages here
import Home from './components/Home.vue'
import BookingPage from './components/BookingPage.vue'
import LoginPage from './components/LoginPage.vue'
import ReviewPage from './components/ReviewPage.vue'
import CreateAccount from './components/CreateAccount.vue'

import store from './store'
import Vuex from 'vuex'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/Booking', name: 'Booking', component: BookingPage},
    {path: '/Login', name: 'Login', component: LoginPage},
    {path: '/Review', name: 'Review', component: ReviewPage},
    {path: '/CreateAccount', name: 'CreateAccount', component: CreateAccount}
  ]
})

//Create app
const myApp = createApp(App)
myApp.use(router, Vuex)
myApp.use( Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')
