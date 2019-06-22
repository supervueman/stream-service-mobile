import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
});
