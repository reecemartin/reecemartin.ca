import React, {useState} from "react";
import { css } from "@emotion/core"
import { Link } from "gatsby";
import { useStaticQuery, graphql } from 'gatsby';

import "./header.css";
import useWindowSize from "../utils/useWindowSize";
import MenuIcon from '@material-ui/icons/Menu';

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
  const [open, setOpen] = useState(false)
  const [width, height] = useWindowSize();
  return (
    <header
      css={css`
        width: 100%;
        height: 70px;
        background-color: black;
        position: relative;
        z-index: 1000;
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
              color: white;
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
      {
        width <= breakpoints[1] ? (
          <div
            css={css`
              position: absolute;
              right: 10px;
              top: 20px;
              ${mq[1]} {
                display: none;
              }
            `}
          >
            <button 
              aria-label="Show Menu"
              onClick={function(event){
                event.preventDefault();
                setOpen(!open)
              }}
              css={css`
                color: transparent;
                border: 0;
                background-color: transparent;
                outline:none;
                :hover {
                  cursor: pointer;
                }
              `}
            >
              <MenuIcon css={css`
                color: white;
                background-color: transparent;
              `}/>
            </button>
          </div>
        ):(
          // desktop menu
          <div
            css={css`
              float: right;
              margin-top: 20px;
              margin-right: 10px;
              display: inline-block;
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
              to="/posts"
            >
              posts
            </Link>
            <Link 
              className="header-link"
              to="/projects"
            >
              projects
            </Link>
            <Link 
              className="header-link"
              to="/contact"
            >
              contact
            </Link>
          </div>
        )
      }

      {
        // mobile menu
        open ? (
          <div
            css={css`
              background-color: black;
              height: auto;
              position: relative;
              padding: 10px 0;

              ${mq[1]} {
                display: none;
              }
            `}
          >
            <Link 
              className="header-link-mobile"
              to="/about"
            >
              about
            </Link>
            <Link 
              className="header-link-mobile"
              to="/youtube"
            >
              youtube
            </Link>
            <Link 
              className="header-link-mobile"
              to="/posts"
            >
              posts
            </Link>
            <Link 
              className="header-link-mobile"
              to="/projects"
            >
              projects
            </Link>
            <Link 
              className="header-link-mobile"
              to="/contact"
            >
              contact
            </Link>
          </div>
        ):<></>
      }
    </header>
  );
}