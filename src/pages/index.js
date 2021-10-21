import React from "react"
import TextLoop from "react-text-loop";
import { css } from "@emotion/core"
import { Link } from "gatsby"
import "./index.css";

import Layout from "../layouts/layout";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function Home() {
  return (
    <Layout className="container" noHeader css={css`
      overflow: hidden;
    `}>
      <div
        css={css`
          height: 10%;
        `}
      >
      </div>
      <div
        css={css`
          height: 90%;
          text-align: center;
        `}
      >
        <img 
          src={require("../../res/images/profile.jpg")}
          alt="Reece Martin Icon"
          css={css`
            height: 30%;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
            border: 5px solid white;
            ${mq[1]} {
              height: 45%;
            }
            ${mq[2]} {
              height: 55%;
            }
          `}
        />

        <h1
          css={css`
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 200%;
            color: white;
            position: relative;
            ${mq[1]} {
              font-size: 300%;
            }
            ${mq[2]} {
              font-size: 400%;
            }
          `}
        >reece martin.<span className="blinking">|</span></h1>

        <h3
          css={css`
            margin: 10px auto;
            color: white;
            text-decoration: none;
            font-size: 90%;
            ${mq[1]} {
              font-size: 120%;
            }
            ${mq[2]} {
              font-size: 150%;
            }
          `}
        >public transport <TextLoop interval="2400">
          <span>creator</span>
          <span>consultant</span>
          <span>planner</span>
          <span>enthusiast</span>
          </TextLoop></h3>

        <div
          className="nav"
          css={css`
            margin-top: 70px;
            height: 50%;
            position: relative;
            margin-left: auto;
            margin-right: auto;
            width: 150px;
            ${mq[1]} {
              margin-top: 3%;
              width: auto;
            }
          `}
        >
          <div
            className="line"
          >
            <Link to="/about">
            <div
              className="nav-button nav-button-lg"
              css={css`
                left: -20px;
                top: -45px;
                ${mq[1]} {
                  left: -45px;
                  top: -20px;
                }
              `}
            >
              <p className="nav-link">
                about me
              </p>
            </div>
            </Link>
            {/* <Link to="/youtube">
              <div className="nav-button nav-button-sm nav-button-sm-1">
              <p className="nav-link">youtube</p>
              </div>
            </Link> */}
            <Link to="/posts">
              <div className="nav-button nav-button-sm nav-button-sm-1">
              <p className="nav-link">posts</p>
              </div>
            </Link>
            <Link to="/projects">
              <div className="nav-button nav-button-sm nav-button-sm-2">
              <p className="nav-link">projects</p>
              </div>
            </Link>
            <Link to="/contact">
              <div
                className="nav-button nav-button-lg"
                css={css`
                left: -20px;
                right: auto;
                bottom: -45px;
                top: auto;
                ${mq[1]} {
                  right: -45px;
                  bottom: -20px;
                  top: -20px;
                  left: auto;
                }
              `}
              >
                <p className="nav-link">
                  contact
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
