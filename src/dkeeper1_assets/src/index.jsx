import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AuthClient } from '@dfinity/auth-client';

const init = async () => {
  const authClient = await AuthClient.create();
  await authClient.login({
    identityProvider: 'https://identity.ic0.app/#authorize',
    onSuccess: () => {
      ReactDOM.render(<App />, document.getElementById('root'));
    },
  });
};
init();
