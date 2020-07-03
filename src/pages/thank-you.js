import React from "react"
import Layout from "../layouts/layout"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const ThankYouPage = () => (
  <Layout>
    <div
      css={css`
        text-align: center;
      `}
    >
      <h1
        css={css`
          padding-top: 20px;
          text-align: center;
          font-size: 300%;
        `}
      >
        Get in Touch!
      </h1>
      <p>Thank you for your submission!</p>
      <Link
        to="/contact"
        css={css`
          color: black;
          text-decoration: underline;
          :hover {
            text-decoration: underline;
          }
        `}  
      >
      Back to Contact
      </Link>
      </div>
  </Layout>
)

export default ThankYouPage