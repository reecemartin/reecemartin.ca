import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"

import Layout from "../layouts/layout";

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <p
        css={css`
          margin-left: 20px;
          margin-bottom: 0;
        `}
      >
        <Link
          to="/posts"
          css={css`
            color: black;
            text-decoration: none;
            :hover {
              text-decoration: underline;
            }
          `}  
        >
        &#60; Back
        </Link>
      </p>
      <div
        css={css`
            padding: 20px 20%;
          `
        }
      >
        <h1
          css={css`
            text-align: center; 
            font-size: 400%;
          `}
        >{post.frontmatter.title}</h1>
        <h4
          css={css`
          text-align: center;
          color: gray;
        `}
        >
          Posted on: {post.frontmatter.date}
        </h4>
        <div
        >
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <h1 
          css={css`
            text-align:center;
          `}
        >
          .
        </h1>
      </div>
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`