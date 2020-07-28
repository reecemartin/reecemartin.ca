import React from 'react';
import Helmet from 'react-helmet';
import { css } from "@emotion/core"
import Header from "../components/header";

export default (props) => (
  <div
    className={props.className}
    style={{ height: "100%", width: "100%" }}
    css={props.css}
  >
    <Helmet key="app-head">
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <title>{props.title ? props.title + " | " : ""}reece martin.</title>
      <meta name="description" content={props.description ? props.description : "this is reece martin's website."}/>
      <meta property="og:description" content={props.description ? props.description : "this is reece martin's website."}/>
      <meta name="twitter:description" content={props.description ? props.description : "this is reece martin's website."}/>
      <meta property="og:title" content={(props.title ? props.title + " | " : "") + "reece martin."}/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <script src="https://apis.google.com/js/platform.js"></script>
      <script src="https://apis.google.com/js/api.js"></script>
    </Helmet>

    {
      props.noHeader ? <></> : <Header />
    }
    {props.children}
  </div>
);