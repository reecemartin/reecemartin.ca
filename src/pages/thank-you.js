import React from "react"
import Layout from "../layouts/layout"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const ThankYouPage = () => (
  <Layout>
    <h1>Contact</h1>
    <p>Thank you for your submission!</p>
    <Link
      to="/posts"
      css={css`
        color: black;
        text-decoration: none;
        :hover {
          text-decoration: underline;
        }
      `}  
    >
    Back to Contacts
    </Link>
  </Layout>
)

export default ThankYouPage