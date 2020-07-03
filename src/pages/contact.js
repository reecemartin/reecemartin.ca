import React from "react"
import { css } from "@emotion/core"
import Grid from "@material-ui/core/Grid";

import Layout from "../layouts/layout";

export default function Contact() {
  return (
    <Layout
    >
      <h1
        css={css`
          padding: 20px 0;
          text-align: center;
        `}
      >
        Get in Touch!
      </h1>

      <Grid container>
        <Grid 
          item 
          xs={12} 
          md={6}
          align-items="center"
          >
        <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you" >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div 
            css={css`
              text-align: center;
            `}
          >
            <label>Your Email:</label>
            <input type="email" name="email" />
          </div>
          <div
            css={css`
            text-align: center;
            
          `}
          >
            <label>Message:</label>
            <textarea name="message" />
            <button
              css={css`
                display: block;
                
              `}
              type="submit">Send</button>
          </div>
          
        </form>
        </Grid>
      </Grid>
    </Layout>
  )
}