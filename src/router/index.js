import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Media from '@/components/pages/Media'
import Set from '@/components/pages/Set'
import Contact from '@/components/pages/Contact'
import Cal from '@/components/pages/Cal'


Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/media',
      name: 'Media',
      component: Media,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/set',
      name: 'Set',
      component: Set,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/cal',
      name: 'Cal',
      component: Cal,
      meta: { transition: 'slide-left'},
    }
  ]
})
