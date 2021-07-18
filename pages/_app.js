//import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss'

import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}