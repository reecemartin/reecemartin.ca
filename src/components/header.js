import React from "react";
import { css } from "@emotion/core"
import { Link } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';

import "./header.css";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query{
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
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
            {data.site.siteMetadata.title}
          </Link>
        </h3>
      </div>
      <div
        css={css`
          margin-top: 20px;
          margin-right: 10px;
          ${mq[1]} {
            float: right;
            margin-top: 20px;
            margin-right: 10px;
          }
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