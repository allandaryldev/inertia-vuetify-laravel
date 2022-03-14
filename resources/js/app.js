
import Vue from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue'
// import Vuex from 'vuex'
import vuetify from './src/plugins/vuetify'
import buefy from './src/plugins/buefy'
import VueMeta from './src/plugins/vue-meta'
import { InertiaProgress } from '@inertiajs/progress'
import  './src/plugins/vee-validate'

InertiaProgress.init()

createInertiaApp({
  resolve: name => import(`./src/${name}`),
  setup({ el, App, props, plugin }) {
    Vue.use(plugin)
    // Vue.use(Vuex);

    new Vue({
      vuetify,
      buefy,
      VueMeta,
      render: h => h(App, props),
    }).$mount(el)
  },
})