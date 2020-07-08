import React from "react"
import { css } from "@emotion/core"
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import Layout from "../layouts/layout";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SocialIcon (props) {
  return (
    <Grid 
      item 
      xs={6}
      style={{marginTop: "20px"}}
      >
      <a 
        href={props.href}
        css={css`
          color: white;
          text-decoration: none;
        `}
      >
        <Button
          css={css`
            width: 100px;
            height: 100px;
          `}
          variant="contained"
          style={{
            backgroundColor: props.color,
            color: "white"
          }}
        >
          {props.children}
        </Button>
      </a>
    </Grid>
  )
}

export default function Contact() {
  return (
    <Layout
      title="contact"
      description="get in touch!"
      css={css`
        ${mq[2]} {
          overflow: hidden;
        }
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

      <Grid 
        container
        spacing={0}
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
            padding: 10px 0;
            ${mq[2]} {
              padding: 10px 50px;
            }
          `}
          >
        <form name="Contact Form" method="POST" data-netlify="true" action="/thank-you" >
          <input type="hidden" name="form-name" value="Contact Form" />
          <div 
            css={css`
              text-align: center;
              .input-field {
                width: 100%;
                margin: 10px 0;
              }
            `}
          >
            <TextField className="input-field" id="input-name" name="name" label="Name"/>
            <TextField className="input-field" id="input-email" name="email" label="Email" />
            
            <FormControl>
              <InputLabel id="input-type-label">Type</InputLabel>
              <Select
                labelId="input-type-label"
                className="input-field"
                id="input-type"
                name="type"
              >
                <MenuItem value={"youtube"}>YouTube Channel-Related</MenuItem>
                <MenuItem value={"partner"}>Work with Me</MenuItem>
                <MenuItem value={"typo"}>Report a Typo</MenuItem>
                <MenuItem value={"bug"}>Report a Bug</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              className="input-field"
              id="input-message"
              name="message"
              label="Message"
              rows="4"
              multiline
              rowsMax={4}
            />
            <Button className="input-field" type="submit" variant="outlined" color="primary">Send</Button>
          </div>
        </form>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          alignItems="center"
          css={css`
            text-align: center;
            padding: 15px;
            overflow: hidden;
            padding-bottom: 50px;
            ${mq[2]} {
              padding-bottom: auto;
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
              width: 100%;
            `}
            >
            <Button 
              variant="contained"
              fullWidth
              style={{
                width: "100%",
                borderRadius: "25px",
                color: "white",
                backgroundColor: "#1348A1"
              }}
              >
              Support via PayPal
            </Button>
          </a>

          <a 
            href="https://www.patreon.com/bePatron?u=20865434" 
            target="_blank" 
            rel="noopener noreferrer"
            css={css`
              text-decoration: none;
              display: block;
              padding-bottom: 10px;
              width: 100%;
            `}
            >
            <Button 
              variant="contained"
              fullWidth
              style={{
                width: "100%",
                borderRadius: "25px",
                backgroundColor: "#a32515",
                color: "white"
              }}
              >
              Join our Patreon
            </Button>
          </a>
          
          <Grid 
            container
            css={css`
              padding: 0 15%;
            `}
            >
            <SocialIcon
              color="#bc0b0b"
              href="https://www.youtube.com/channel/UCf4iKXL_SJQ5d0qsKkboRRQ"
            >
              YouTube
            </SocialIcon>
            <SocialIcon
              color="#1585c6"
              href="https://twitter.com/RM_Transit"
            >
              Twitter
            </SocialIcon>
            <SocialIcon
              color="#4f5b82"
              href="https://discord.gg/Gezxt9m"
            >
              Discord
            </SocialIcon>
            <SocialIcon
              color="#0077B5"
              href="https://www.linkedin.com/in/reece-martin-a4287b90/"
            >
              LinkedIn
            </SocialIcon>
          </Grid>

        </Grid>
      </Grid>
    </Layout>
  )
}