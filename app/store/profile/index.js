import {
  apolloClient
} from '../../plugins/apolloProvider';

import {
  EDIT_PROFILE
} from '../../graphql/mutations/editProfile';

export const profile = {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    /**
     * @function editProfile
     * @async
     * @param {Object} payload {email, password}
     */
    async updateProfile(undefined, payload) {
      await apolloClient.mutate({
        mutation: EDIT_PROFILE,
        variables: {
          slug: payload.slug,
          email: payload.email,
          phone: payload.phone,
          website: payload.website,
          facebook: payload.facebook,
          vkontakte: payload.vkontakte,
          instagram: payload.instagram,
          firstname: payload.firstname,
          lastname: payload.lastname,
          avatar: payload.avatar,
          content: payload.content,
          isStream: payload.isStream
        }
      });
    }
  },
  getters: {}
}
