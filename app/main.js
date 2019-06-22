import Vue from 'nativescript-vue'
import App from '@/App'
import store from '@/store';
import router from '@/router';
import apolloProvider from '@/plugins/apolloProvider';
import '@/assets/sass/index.sass';
import VueDevtools from 'nativescript-vue-devtools';
import localStorage from 'nativescript-localstorage';
import BottomNavigation from 'nativescript-bottom-navigation/vue';


if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools);
}

Vue.use(BottomNavigation)

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');

Vue.registerElement('Carousel', () => require('nativescript-carousel').Carousel);
Vue.registerElement('CarouselItem', () => require('nativescript-carousel').CarouselItem);
// Vue.registerElement('BottomNavigation', () => require('nativescript-bottom-navigation/vue').BottomNavigation);
// Vue.registerElement('BottomNavigationTab', () => require('nativescript-bottom-navigation/vue').BottomNavigationTab);

new Vue({
  store,
  router,
  localStorage,
  apolloProvider,
  render: h => h('frame', [h(App)])
}).$start();
