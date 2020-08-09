import React from "react"

import AWS from "aws-sdk"

import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { Link, graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import FavoriteIcon from "@material-ui/icons/Favorite"
import VisibilityIcon from '@material-ui/icons/Visibility';

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
    <div className="post-item">
      <Grid container>
        <Grid item xs={10}>
        <h4
          css={css`
            color: #606060;
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
        >
          {props.excerpt}
        </p>
        </Grid>
        <Grid item xs={2}>
          <p css={css`
            position: relative;
            font-size: 1.3em;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 10px;
          `}>
            <span css={css`
              
            `}>{props.likes[props.title]}</span> <FavoriteIcon css={css`
              display: inline-block;
              position: relative;
              top: 5px;
            `}/>
          </p>
          <p css={css`
            position: relative;
            font-size: 1.3em;
            text-align: center;
          `}>
            <span css={css`
              
            `}>{props.views[props.title]}</span> <VisibilityIcon css={css`
              display: inline-block;
              position: relative;
              top: 5px;
            `}/>
          </p>
        </Grid>
      </Grid>
    </div>
    </Link>
  )
}


export default function MyFiles({ data }) {
  // get likes & views for all posts
  const [likes, setLikes] = React.useState({})
  const [views, setViews] = React.useState({})

  React.useEffect(() => {
    AWS.config.update({region: "us-east-2"})
    const ddb = new AWS.DynamoDB.DocumentClient({
      accessKeyId: process.env.GATSBY_DDB_ACCESS_KEY_ID,
      secretAccessKey: process.env.GATSBY_DDB_SECRET_KEY
    })

    // scan likes
    let params = {
      TableName: "rmtransit-blog-likes"
    }
    
    ddb.scan(params, onScanLikes);
  
    function onScanLikes (err, data) {
      if (err) {
        console.error("Unable to scan the table")
        console.error(err)
      } else {
        const newLikes = {}
        data.Items.forEach(post => {
          newLikes[post.title] = post.likes
        })
        setLikes(newLikes)
      }
    }

    // scan views
    params = {
      TableName: "rmtransit-blog-views"
    }
    
    ddb.scan(params, onScanViews);
  
    function onScanViews (err, data) {
      if (err) {
        console.error("Unable to scan the table")
        console.error(err)
      } else {
        const newViews = {}
        data.Items.forEach(post => {
          newViews[post.title] = post.views
        })
        setViews(newViews)
      }
    }
  }, [])

  return (
    <Layout
      title="posts"
      description="read my posts centered on transit and infrastructure."
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
            height: 140px;
            padding-top: 15px;
            overflow: hidden;
          `}
        >
          <h1
            css={css`
              margin: auto;
              text-align: center;
              font-size: 300%;
            `}
          >
            Posts
          </h1>

          <div
            css={css`
              width: 100%;
              position: relative;
            `}
          >
          <a 
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=867U3N8UJHJB6&currency_code=CAD&source=url" target="_blank" 
            rel="noopener noreferrer"
            css={css`
              text-decoration: none;
              display: block;
              padding-bottom: 15px;
              width: 30%;
              position: fixed;
              left: 50%;
              /* bring your own prefixes */
              transform: translate(-50%, 30%);
            `}
            >
            <Button 
              variant="outlined"
              color="black"
              style={{
                width: "100%",
                borderRadius: "25px"
              }}
              >
              Support via PayPal
            </Button>
          </a>
          </div>
        </div>

        {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}

        <div
          className="post-list"
        >
          {data.allMarkdownRemark.edges.map(({node}, i) => (
            <div key={i}>
              <PostItem 
              link={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
              likes={likes}
              views={views}
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