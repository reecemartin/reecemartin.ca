import React from 'react'
import { css } from "@emotion/core"
import Button from '@material-ui/core/Button'

import Layout from '../layouts/layout'
import supporters from "../../res/supporters"

export default function Supporters() {
  return <Layout
    title="supporters"
    description="thank you to all of my readers that have supported me on paypal!"
  >
    <h1
      css={css`
        padding-top: 20px;
        text-align: center;
        font-size: 300%;
      `}
    >
      Supporters
    </h1>

    <div
      css={css`
        width: 100%;
        height: 5rem;
        position: relative;
        @media (min-width: 416px) {
          height: 3.5rem;
        }
      `}
    >
    <a 
      href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=867U3N8UJHJB6&currency_code=CAD&source=url" target="_blank" 
      rel="noopener noreferrer"
      css={css`
        text-decoration: none;
        display: block;
        padding-bottom: 15px;
        min-width: 30%;
        position: absolute;
        left: 50%;
        /* bring your own prefixes */
        transform: translate(-50%, 0%);
      `}
      >
      <Button 
        variant="outlined"
        style={{
          width: "100%",
          borderRadius: "25px",
          color: "black"
        }}
        >
        Support via PayPal
      </Button>
    </a>
    </div>

    <div
      css={css`
        margin-bottom: 50px;
      `}
    >
      <h3
        css={css`
          text-align: center;
          text-decoration: underline;
        `}
      >Recurring Donations</h3>
      {
        supporters.recurring.map(supporter => (
          <p 
            css={css`
              text-align: center;
            `}
            key={supporter}
          >
            {supporter}
          </p>
        ))
      }
      <h3
        css={css`
          text-align: center;
          text-decoration: underline;
        `}
      >One-Time Donations</h3>
      {
        supporters.oneTime.map(supporter => (
          <p 
            css={css`
              text-align: center;
            `}
            key={supporter}
          >
            {supporter}
          </p>
        ))
      }
    </div>

    <h1
      css={css`
        width: 80%;
        text-align: center;
        border: 1px solid black;
        border-radius: 5px;
        margin: auto;
        padding: 20px;
      `}
    >
      Thank you to all of our supporters for your generous support! 
    </h1>
  </Layout>
}