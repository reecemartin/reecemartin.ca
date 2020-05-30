import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import "./index.css";

export default function Home() {
  return (
    <div
      class="container"
    >
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
            margin: auto;
            display: block;
            border: 5px solid white;
          `}
        />

        <h1
          css={css`
            margin-top: 10px;
            font-size: 400%;
            color: white;
          `}
        >Reece Martin</h1>

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
                About Me
              </p>
            </div>
            </Link>
            <Link to="/youtube">
              <div className="nav-button nav-button-sm nav-button-sm-1">
              <p className="nav-link">YouTube</p>
              </div>
            </Link>
            <Link to="/dev">
              <div className="nav-button nav-button-sm nav-button-sm-2">
              <p className="nav-link">Software Dev</p>
              </div>
            </Link>
            <Link to="/posts">
              <div className="nav-button nav-button-sm nav-button-sm-3">
              <p className="nav-link">Posts</p>
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
                  Contact
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
