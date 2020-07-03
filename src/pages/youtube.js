import React from "react"
import { css } from "@emotion/core"
import Grid from "@material-ui/core/Grid"

import Layout from "../layouts/layout";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

class YouTube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribers: 5000,
      views: 1000000,
    }
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCf4iKXL_SJQ5d0qsKkboRRQ&key=" + process.env.YOUTUBE_API_KEY).then(res => {
      if (res.status === 200) {
        return res.json()
      }
    }).then(body => {
      console.log(body)
      this.setState({
        subscribers: body.items[0].statistics.subscriberCount,
        views: body.items[0].statistics.viewCount
      })
    }).catch(err => {
      console.log("failed")
    })
  }

  render() {
    console.log("YOUTUBE_API_KEY=" + process.env.YOUTUBE_API_KEY)

    return (
      <Layout css={css`
      ${mq[2]} {
        overflow:hidden;
      }
      
      `}
      >
        <Grid
          container
          css={css`
          height: 100%;
          width: 100%; 
          ${mq[1]} {
            height: 88vh; 
            padding-bottom: 0;
          }
          `}
        >
          <Grid
            xs={12}
            md={6}
            container
            item
            justify="center"
            alignItems="center"
            css={css`
          background-color: #8c8c8c;
          text-align: center;
          padding-bottom: 100px;
        `}
          >
            <Grid
              item
              css={css`
              height: 65%;
              width: 80%;
            `}
            >
              <h2
                css={css`
                background-color: #333333;
                color: white;
                padding: 10px;
              `}
              >YouTube</h2>
              <a
                href="https://www.youtube.com/channel/UCf4iKXL_SJQ5d0qsKkboRRQ"
                target="_blank"
                rel="noopener noreferrer"
                css={css`
                color: white;
                text-decoration: none;
                transition: 0.3s;

                :hover {
                  color: gray;
                }
              `}
              >
                <h1
                  css={css`
                background-color: #333333;
                padding: 10px;
                font-size: 300%;
              `}
                >
                  RMTransit
              </h1>
              </a>
              <div
                css={css`
              background-color: lightgray;
              padding: 10px;
            `}
              >
                <div
                  class="g-ytsubscribe"
                  data-channelid="UCf4iKXL_SJQ5d0qsKkboRRQ"
                  data-layout="full"
                  data-count="default"

                ></div>
              </div>
              <div
                css={css`
                color: white;
                margin-top: 5%;
              `}
              >
                <div
                  css={css`
                  display: inline-block;
                  width: 45%;
                  margin-right: 10%;
                  background-color: #333333;
                  padding: 10px;
                  font-size: 80%;
                `}
                >
                  Subscribers: {this.state.subscribers}
                </div>
                <div
                  css={css`
                  display: inline-block;
                  width: 45%;
                  background-color: #333333;
                  padding: 10px;
                  font-size: 80%;
                `}
                >
                  Total Views: {this.state.views}
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            xs={12}
            md={6}
            container
            item
            justify="center"
            alignItems="center"
            css={css`
          
        `}
          >
            <Grid
              item
              css={css`
              height: 80%;
              width: 80%;
              background-color: lightgray;
              border-radius:5px;
              padding: 20px;
              overflow-y: scroll;
            `}
            >
              <p
                css={css`
                color: black;
                text-decoration: none;
              `}
              >
                One of my main passions right now is my YouTube channel RMTransit. Focused on exploring transit and infrastructure topics and issues, I have been running this channel with my partner Ellen for around 4 years.
            </p>
              <p
                css={css`
              color: black;
              text-decoration: none;
              a {
                color: black;
              }
            `}
              >
                Some of our most popular YouTube videos include <a href="https://www.youtube.com/watch?v=ttek78mRoRg" target="_blank"
                  rel="noopener noreferrer">this one</a> we made on the O-Train Confederation Line's opening, <a href="https://www.youtube.com/watch?v=TXEO7DbXPS0" target="_blank"
                    rel="noopener noreferrer">this overview</a> of London's new Crossrail project, and <a href="https://www.youtube.com/watch?v=ILqWCzaZECs" target="_blank"
                      rel="noopener noreferrer">this overview</a> of the future of Montreal's rapid transit. We also make transit station tours like <a href="https://www.youtube.com/watch?v=5RqGSiW7vRc" target="_blank"
                        rel="noopener noreferrer">this one</a>, news story analysis videos like <a href="https://www.youtube.com/watch?v=VA_02xHu4j0" target="_blank"
                          rel="noopener noreferrer">this one</a>, and opinions on different topics like <a href="https://www.youtube.com/watch?v=60OjiUgZuPM" target="_blank"
                            rel="noopener noreferrer">this one</a>.
            </p>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    )
  }
}

export default YouTube;