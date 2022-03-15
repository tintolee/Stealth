import { useContext, useEffect , useState} from 'react';
import { Context as ErrorContext } from '../context/errors/ErrorContext'
import {Context as AuthContext} from '../context/auth/AuthContext'
import { onError } from "@apollo/client/link/error"
import client from '../api/graphql/apollo';
import { getAuthToken } from '../storage';
import { setContext } from '@apollo/client/link/context';

export default () => {
  const {showError } = useContext(ErrorContext)
  const [accessToken, setAccessToken] = useState("");
   const {logIn} = useContext(AuthContext)


  const getAccessToken = async () => {
    try {
      const token = await getAuthToken();
      // @ts-ignore
      setAccessToken(token);
     
      
    } catch (e) {
      console.log(e);
    }
  };
 ;

  useEffect(() => {
    
    const err = onError(({ graphQLErrors, networkError ,operation,forward }) => {
          console.log(graphQLErrors);
          
     
      if (graphQLErrors)
      graphQLErrors.map(({ message, extensions }) => {
        // @ts-ignore
        switch (extensions.code) {
          case "UNAUTHENTICATED":
            showError(message.split(':')[1])
          case "INTERNAL_SERVER_ERROR":
            showError(message.split(':')[1])
          case "invalid-jwt":
            // refetch the jwt
            const oldHeaders = operation.getContext().headers;
            getAccessToken().then(()=>{
              operation.setContext({
                headers: {
                  ...oldHeaders,
                  authorization: `Bearer ${accessToken}`
                }
              });
            }).then(()=>{
               // retry the request, returning the new observable
              return forward(operation)
            }).catch((error) => {
              // No refresh or client token available, we force user to login
              console.log(error);
              logIn()
            })
        
          default:
            // default case
            showError(message.split(':')[1])
        }
      });
      
      if (networkError) {
        const { message } = networkError;
        showError(message)
      }

      

    });

    client.setLink(err.concat(client.link))
  


  }, []);




}

