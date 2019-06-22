import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import {
  authenticate
} from './authenticate';
import {
  profile
} from './profile'

export default new Vuex.Store({
  modules: {
    authenticate,
    profile
  }
});
