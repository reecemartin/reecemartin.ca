import React from "react"
import Button from "@material-ui/core/Button"
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
          ${mq[2]} {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
          }
        `}
      >
        <h1
          css={css`
            text-align: center;
            font-size: 450%;
            width: 100vw;
            letter-spacing: 5px;
            margin-bottom: 0;
            margin: auto;
            ${mq[1]} {
              font-size: 700%;
            }
            ${mq[2]} {
              font-size: 800%;
              flex: 0 0 50%;
            }
          `}
        >
          ABOUT
        </h1>
        <h1
          css={css`
            text-align: center;
            font-size: 800%;
            width: 100vw;
            letter-spacing: 5px;
            margin: auto;
            ${mq[2]} {
              flex: 1;
            }
          `}
        >
          ME
        </h1>
        <div
          css={css`
            width: 90%;
            margin: auto;
            margin-top: 0;
            margin-bottom: 50px;
            min-height: 100px;
            background-color: lightgray;
            padding: 20px;
            ${mq[2]} {
              flex: 0 0 45%;
              margin: 50px;
            }
          `}
        >
          <p
            css={css`
              width: 100%;
              height: 100%;
              font-size: 120%;
              text-align: justify;
              margin-bottom: 0;
              ${mq[2]} {
                font-size: 100%;
              }
            `}
          >
            Hi, my name's Reece. I'm a passionate software developer and computer scientist who graduated from the University of Toronto with a Honours Bachelor of Science in Computer Science in 2020.

I've substantial industry experience particularly working in the Financial Sector in companies both small and large. During these experiences I've done a wide range or work from Backend Java Development, to Frontend ReactJS Development, more important than that - I have a love of learning and self development that drives everything I do.
          </p>
        </div>
        <div
          css={css`
            width: 90%;
            margin: auto;
            margin-top: 0;
            margin-bottom: 50px;
            min-height: 100px;
            background-color: #606060;
            padding: 20px;
            ${mq[2]} {
              flex: 1;
              margin: 50px;
            }
          `}
        >
          <p
            css={css`
              width: 100%;
              height: 100%;
              font-size: 120%;
              text-align: justify;
              margin-bottom: 0;
              color: white;
              ${mq[2]} {
                font-size: 100%;
              }
            `}
          >
            Outside of Software Development I have previously run a YouTube Channel with over 9000 subscribers and over 1 million views focused on communicating Public Transit Projects and Plans in a simplified and digestible format. I also create videos talking about project construction, news, vehicle design and service planning.

            Finally, on a final note I have a great passion for teaching and education which I have engaged both through the educational content I create for YouTube and through previous positions such as working as a Computer Science Teaching Assistant. I find teaching very rewarding and I hope to continue with it in the future. 
          </p>
        </div>
      </div>
    </Layout>
  )
}
