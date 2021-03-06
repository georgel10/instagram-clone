import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import App from './App';
import { name as appName } from './app.json';

const customFetch = (uri: RequestInfo, options: RequestInit) => {
  return fetch(uri, options).then((response) => {
    if (response.status >= 500) {
      // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://racerfan.com:3000/graphql',
    fetch: customFetch,
  }),
  cache,
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
