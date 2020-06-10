import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import PropTypes from 'prop-types';

import "./posts.css";
import Layout from "../layouts/layout";

const PostItem = function(props) {
  return (
    <Link
        to={props.link}
        css={css`
          text-decoration: none;
          color: inherit;
        `}
      >
    <div key={props.key} className="post-item">
      <h4
        css={css`
          color: gray;
          margin-bottom:3px;
        `}
      >
        {props.date}
      </h4>
      <h3
        css={css`
          margin-bottom: ${rhythm(1 / 4)};
        `}
      >
        {props.title}
      </h3>
      <p
        css={css`
          margin-bottom: 0px;
        `}
      >{props.excerpt}</p>
    </div>
    </Link>
  )
}

PostItem.propTypes = {
  key: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired
}

export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout
      css={css`
      `}
      >
      <div
        css={css`
          height: calc(100% - 70px);
        `}
      >
        <div
          css={css`
            height: 110px;
            padding-top: 15px;
            overflow: hidden;
          `}
        >
          <h1
            css={css`
              margin: auto;
              text-align: center;
              font-size: 300%;
              text-decoration: underline;
            `}
          >
            Posts
          </h1>
        </div>

        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}

        <div
          className="post-list"
        >
          {data.allMarkdownRemark.edges.map(({node}, i) => (
            <div>
              <PostItem 
              key={node.id} 
              link={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              />
              <hr 
                css={css`
                  width: 90%;
                  margin: auto;
                  margin-bottom: 5px;
                `}
                key={node.id + "-hr"}
              />
            </div>
          ))}
          <h1 
            css={css`
              text-align:center;
            `}
          >
            .
          </h1>
            
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`