import React from 'react';
import Helmet from 'react-helmet';

export default (props) => (
  <div className={props.className} style={{height: "100%", width: "100%"}}>
    <Helmet key="app-head">
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    {/* Favicons from realfavicongenerator.net */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <title>reece martin.</title>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  </Helmet>
  {props.children}
  </div>
);