import React from "react"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import "./index.css";

export default function Home() {
  return (
    <div
      class="container"
    >
      <div
        css={css`
          height: 20%;
        `}
      >
      </div>
      <div
        css={css`
          height: 60%;
        `}
      >
        <img 
          src={require("../../res/images/profile.jpg")}
          css={css`
            height: 75%;
            border-radius: 50%;
            margin: auto;
            display: block;
            border: 5px solid white;
          `}
        />
      </div>
      <div
        css={css`
          height: 20%;
        `}
      ></div>
    </div>
  )
}
