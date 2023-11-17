import { Amplify } from 'aws-amplify';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
import type { AppProps } from 'next/app';
Amplify.configure(config);

export function App({ signOut, user, Component, pageProps }: WithAuthenticatorProps & AppProps) {
  return (
    <>
          <Component {...pageProps} />
    </>
  );
}

export default withAuthenticator(App);