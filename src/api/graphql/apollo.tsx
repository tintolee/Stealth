import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAuthToken } from '../../storage';
// import {createNetworkStatusNotifier} from 'react-apollo-network-status';
import { onError } from "@apollo/client/link/error"

const httpLink = createHttpLink({
  // uri: 'http://192.168.43.19:4000/graph',
  uri: 'http://10.10.1.3:4000/graph',
  // uri: 'http://192.168.0.123:4000/graph',
  

});
const cache = new InMemoryCache();

 export const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = await getAuthToken();
//  console.log({ token });
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


export const client = new ApolloClient({
  cache,
  link: from([authLink, httpLink]),
});


export default client;
