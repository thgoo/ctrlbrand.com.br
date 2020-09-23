import React from 'react';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <div className="desktop-limit">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
