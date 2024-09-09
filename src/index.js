import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';

import reportWebVitals from './reportWebVitals';
const removeTypenameLink = removeTypenameFromVariables();
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});
const link = from([removeTypenameLink, httpLink]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
