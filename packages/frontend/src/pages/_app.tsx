import '../utils/aws/Amplify'
import { Authenticator } from '@aws-amplify/ui-react';
import type { AppProps } from 'next/app';
import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Authenticator.Provider>
            <Component {...pageProps} />
        </Authenticator.Provider>
    );
}