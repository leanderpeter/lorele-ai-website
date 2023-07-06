import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './globals.css';
import Nav from './nav';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <div className="h-full bg-gray-50">
        <div className="h-full">
          <Nav />
          <Component {...pageProps} />
        </div>
      </div>
    </UserProvider>
  );
}
