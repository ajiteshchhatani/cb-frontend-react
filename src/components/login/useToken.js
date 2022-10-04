import * as React from 'react';

export default function useToken() {
    function getTokenFromSessionStorage() {
        const tokenDetails = sessionStorage.getItem('token');
        const token = JSON.parse(tokenDetails)
        return token
      }

      const [token, setToken] = React.useState(getTokenFromSessionStorage())
      
      function saveTokenToSessionStorage(userToken = {}, operation = 'login') {
        if(operation === 'logout') {
          sessionStorage.removeItem('token')
          setToken(getTokenFromSessionStorage());
        }
        else {
          sessionStorage.setItem('token', JSON.stringify(userToken))
          setToken(userToken)
        }
      }

      return {
        setToken: saveTokenToSessionStorage,
        token
      } 
}