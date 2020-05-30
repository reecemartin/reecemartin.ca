import React from "react"
import { css } from "@emotion/core"
import styled from '@emotion/styled'
import { Link } from "gatsby"
import "./index.css";
const NUM_BG = 3

const Container = styled.div`
  backgroundImage: url(${props => props.bgName});
  backgroundRepeat: no-repeat;
  backgroundSize: cover;
  backgroundPosition: center;
  height: 100%;
`;

export default function Home() {
  // randomize background image
  const bgNum = Math.ceil( Math.random() * NUM_BG );
  const bgName = "../../res/images/bg-" + bgNum + ".jpg";

  return (
    <Container bgName={bgName}>
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
            height: 55%;
            border-radius: 50%;
            margin: 0 auto;
            display: block;
            border: 5px solid white;
          `}
        />

        <h1
          css={css`
            margin-top: 10px;
            margin-bottom: 0;
            font-size: 400%;
            color: white;
            position: relative;
          `}
        >reece martin.<span className="blinking">|</span></h1>

        <h3
          css={css`
            margin: 10px auto;
            color: white;
            text-decoration: none;
          `}
        >transport enthusiast | software developer</h3>

        <div
          className="nav"
          css={css`
            margin-top: 3%;
          `}
        >
          <div
            className="line"
          >
            <Link to="/about">
            <div
              className="nav-button nav-button-lg"
              css={css`
                left: -45px;
              `}
            >
              <p className="nav-link">
                about me
              </p>
            </div>
            </Link>
            <Link to="/youtube">
              <div className="nav-button nav-button-sm nav-button-sm-1">
              <p className="nav-link">youtube</p>
              </div>
            </Link>
            <Link to="/dev">
              <div className="nav-button nav-button-sm nav-button-sm-2">
              <p className="nav-link">software</p>
              </div>
            </Link>
            <Link to="/posts">
              <div className="nav-button nav-button-sm nav-button-sm-3">
              <p className="nav-link">posts</p>
              </div>
            </Link>
            <Link to="/contact">
              <div
                className="nav-button nav-button-lg"
                css={css`
                  right: -45px;
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
    </Container>
  )
}
