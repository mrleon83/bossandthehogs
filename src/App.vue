<template>
  <div id="app">
    <navbar></navbar>
        <vue-page-transition name="overlay-right" appear>
          <router-view/>
        </vue-page-transition>
           <!-- <router-view :key="$route.path"></router-view> -->
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import navbar from '@/components/sections/NavBar'
import Footer from '@/components/sections/Footer'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import { BootstrapVueIcons } from 'bootstrap-vue'

import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)

export default {
  name: 'App',
  components: {
    navbar,
    Footer,
    BootstrapVueIcons
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rye&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d0e09;;
  background-repeat: repeat-y;
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  max-width: 100vw;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.margin-top {
  margin-top: 50px;
}
</style>
