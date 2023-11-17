import '../utils/aws/Amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../amplifyconfiguration.json';
import type { AppProps } from 'next/app';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps & WithAuthenticatorProps) {
    return (
        <Authenticator.Provider>
            <Authenticator>
                {({ signOut, user }) => (
                    <>
                        <h1>Hello {user?.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                        <Component {...pageProps} />
                    </>
                )}
            </Authenticator>
        </Authenticator.Provider>
    );
}

export default withAuthenticator(MyApp);
