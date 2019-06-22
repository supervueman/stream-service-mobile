import Vue from 'nativescript-vue';
import localStorage from 'nativescript-localstorage';

import {
  ApolloClient
} from 'apollo-client';
import {
  HttpLink
} from 'apollo-link-http';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';;
import VueApollo from 'vue-apollo';
import {
  setContext
} from 'apollo-link-context';

// HTTP connexion to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://stream-service.herokuapp.com/graphql'
});

// Cache implementation
const cache = new InMemoryCache({
  addTypename: false
});

const authLink = setContext(
  (_, {
    headers
  }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('access_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? token : ''
      }
    };
  }
);

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
  connectToDevTools: true,
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache'
    }
  }
})

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default apolloProvider;
