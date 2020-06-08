import React from "react";
import { css } from "@emotion/core"
import { Link } from "gatsby";

import "./header.css";

export default function Header() {
  return (
    <header
      css={css`
        width: 100%;
        height: 70px;
        background-color: black;
        position: relative;
        margin-bottom: 10px;
      `}
    >
      <div
        css={css`
          display: inline-block;
          color: white;
          margin-top: 20px;
          margin-left: 20px;
        `}
      >
        <h3>
          <Link
            css={css`
              text-decoration: none;
              :hover {
                color: gray;
                text-decoration: underline;
              }
              :visited {
                color: white;
              }
              :active {
                color: gray;
                text-decoration: underline;
              }
            `}
            to="/"  
          >
          reece martin.
          </Link>
        </h3>
      </div>
      <div
        css={css`
          float: right;
          margin-top: 20px;
          margin-right: 10px;
        `}
      >
        <Link 
          className="header-link"
          to="/about"
        >
          about
        </Link>
        <Link 
          className="header-link"
          to="/youtube"
        >
          youtube
        </Link>
        <Link 
          className="header-link"
          to="/software"
        >
          software
        </Link>
        <Link 
          className="header-link"
          to="/posts"
        >
          posts
        </Link>
        <Link 
          className="header-link"
          to="/contact"
        >
          contact
        </Link>
      </div>
    </header>
  );
}