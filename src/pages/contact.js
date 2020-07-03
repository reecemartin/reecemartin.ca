import React from "react"
import { css } from "@emotion/core"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Layout from "../layouts/layout";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

function FormLabel (props){
  return (
    <p
      css={props.css}
    >
      {props.children}
    </p>
  )
}

export default function Contact() {
  return (
    <Layout
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

      <Grid 
        container
        css={css`
          padding: 0 10%;
        `}
      >
        <Grid 
          item 
          xs={12} 
          md={6}
          align-items="center"
          css={css`
            padding: 10px 50px;
          `}
          >
        <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you" >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div 
            css={css`
              text-align: center;
              .input-field {
                width: 100%;
                margin: 10px;
              }
            `}
          >
            <TextField className="input-field" id="input-name" name="name" label="Name" variant="filled" />
            <TextField className="input-field" id="input-email" name="email" label="Email" variant="filled" />
            <TextField
              className="input-field"
              id="input-message"
              name="message"
              label="Message"
              rows="4"
              variant="filled"
              multiline
              rowsMax={4}
            />
            <Button className="input-field" type="submit" variant="outlined">Send</Button>
          </div>
          
        </form>
        </Grid>
      </Grid>
    </Layout>
  )
}