import {
  apolloClient
} from '../../plugins/apolloProvider';
import localStorage from 'nativescript-localstorage';

import {
  SIGN_UP
} from '../../graphql/mutations/signUp';
import {
  SIGN_IN
} from '../../graphql/queries/signIn';
import {
  QUERY_PROFILE
} from '../../graphql/queries/queryProfile';

export const authenticate = {
  namespaced: true,
  state: {
    profile: {
      _id: '',
      email: '',
      phone: '',
      website: '',
      facebook: '',
      vkontakte: '',
      instagram: '',
      firstname: '',
      lastname: '',
      avatar: '',
      content: '',
      isStream: false
    }
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    /**
     * @function signUp
     * @async
     * @param {Object} payload {email, password}
     */
    async signUp(undefined, payload) {
      await apolloClient.mutate({
        mutation: SIGN_UP,
        variables: {
          email: payload.email,
          password: payload.password,
          isStream: false
        }
      });
    },

    /**
     * @function signIn
     * @async
     * @param {Object} payload {email, password}
     */
    async signIn({
      commit
    }, payload) {
      const res = await apolloClient.query({
        query: SIGN_IN,
        variables: {
          email: payload.email,
          password: payload.password
        }
      });

      localStorage.setItem('uid', res.data.login.userId);
      localStorage.setItem('access_token', res.data.login.token);

      commit('setProfile', {
        _id: res.data.login.userId,
        email: 'test'
      });
      await this.dispatch('authenticate/fetchProfile');
    },

    async fetchProfile({
      commit
    }) {
      const res = await apolloClient.query({
        query: QUERY_PROFILE,
        variables: {
          token: localStorage.getItem('access_token')
        }
      });
      console.log('hi')
      commit('setProfile', res.data.queryProfile);
    },

    async logout({
      commit
    }) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('uid');
      commit('setProfile', {
        _id: '',
        email: '',
        phone: '',
        website: '',
        facebook: '',
        vkontakte: '',
        instagram: '',
        firstname: '',
        lastname: '',
        avatar: '',
        content: '',
        isStream: false
      });
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
}
