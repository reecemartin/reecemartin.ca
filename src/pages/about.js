import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { css } from "@emotion/core"
import AboutPic from "../../res/images/about-pic.jpg"

import Layout from "../layouts/layout";
const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function About() {
  return (
    <Layout
      title="about"
      description="learn a bit more about me!"
      css={css`
        overflow-x: hidden;
      `}
    >
      <div
        css={css`
          display: block;
          width: 95%;
          min-height: 750px;
          margin: 2.5% auto;
          border: 1px solid grey;
          border-radius: 5px;
        `}
      >
        <Grid
          container
          css={css`
            width: 100%;
            height: 100%;
          `}
        >
          <Grid
            item
            css={css`
              // background-color: blue;
            `}
            xs={12}
            md={6}
          >
            <div
              css={css`
                background-color: white;
                width: 50%;
                margin: auto;
                margin-top: 15%;
                height: 65%;
                text-align: center;
              `}
            >
              <img
                src={AboutPic}
                css={css`
                  display: block;
                  height: auto;
                  width: 90%;
                  margin: auto;
                  margin-bottom: 0;
                `}
              >
              </img>
              <h2
                css={css`
                  font-size: 300%;
                  margin-top: 2rem;
                `}
              >
                about me.
              </h2>
            </div>
          </Grid>
          <Grid
            item
            css={css`
              // background-color: yellow;
            `}
            xs={12}
            md={6}
          >
            <div
              css={css`
                min-height: 80%;
                width: 80%;
                margin: auto;
                margin-top: 10%;
                border: 1px solid black;
                border-radius: 5px;
                padding: 10px;
                text-align: center;
              `}
            >
              <p>
              Hello world! I'm Reece Martin, and you might know me from my YouTube channel RMTransit, or on other social media platforms under the same name, or maybe you don't know me yet. Either way, this is the right place to come to!
              </p>

              <p>
              I am the founder & host of RMTransit, a YouTube channel focused on communicating public transit Projects and plans in a simplified and digestible format to a wider audience. I also create videos talking about project construction, news, vehicle design and service planning. The channel reached the 50,000 subscriber milestone in October 2021, and we are actively working towards 100k! 
              </p>

              <p>
              Before I became a full-time YouTuber, I was a software developer by trade, having graduated in 2020 with an Honours Bachelor of Science degree in Computer Science from the University of Toronto. I'm still an avid tech enthusiast, and occasionally dabble in some coding. 
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* <div
        css={css`
          display: block;
          width: 100%;
          height: 750px;
          background-color: blue;
        `}
      >
        some places i've been to
      </div> */}
    </Layout>
  )
}
