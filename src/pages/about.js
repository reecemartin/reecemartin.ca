import React from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { css } from "@emotion/core"

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
                src={require("../../res/images/about-pic.jpg")}
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
              Hi, my name's Reece. I'm a passionate software developer and computer scientist who graduated from the University of Toronto with a Honours Bachelor of Science in Computer Science in 2020.
              </p>

              <p>
              I've substantial industry experience particularly working in the Financial Sector in companies both small and large. During these experiences I've done a wide range or work from Backend Java Development, to Frontend ReactJS Development, more important than that - I have a love of learning and self development that drives everything I do.
              </p>
              
              <p>
              Outside of Software Development I have previously run a YouTube Channel with over 9000 subscribers and over 1 million views focused on communicating Public Transit Projects and Plans in a simplified and digestible format. I also create videos talking about project construction, news, vehicle design and service planning.
              </p>
              
              <p>
              And on a final note, I have a great passion for teaching and education which I have engaged both through the educational content I create for YouTube and through previous positions such as working as a Computer Science Teaching Assistant. I find teaching very rewarding and I hope to continue with it in the future. 
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
