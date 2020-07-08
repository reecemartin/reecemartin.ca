import React from "react"
import { css } from "@emotion/core"

import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function ProjectCard(props) {
  console.log(props)
  const {title, startDate, endDate, description, image} = props.project
  
  return (
    <Card
      variant="outlined"
      css={css`
        width: 100%;
        min-height: 100px;
        margin: auto;
        margin-bottom: 20px;
        
        ${mq[2]} {
          width: 900px;
        }
      `}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          container
          css={css`
            padding: 10px;
          `}
        >
          <img
            src={image}
            alt={title}
            css={css`
              width: 100%;
              max-width: 100%;
              max-height: 100%;
              border: 1px solid lightgray;
              border-radius: 3px;
              padding: 5px 5px;
              margin-bottom: 0px;
              margin: auto;
            `}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          css={css`
            padding: 20px 10px;
            text-align: center;
          `}
        >
          <h2
            css={css`
              margin-bottom: 10px;
            `}
          >
            {title}
          </h2>
          <h5
            css={css`
              color: darkgray;
              margin-bottom: 5px;
            `}
          >
            {startDate} - {endDate}
          </h5>
          <p
            css={css`
              font-size: 80%;
              padding: 10px;
              margin-bottom: 5px;
            `}
          >
            {description}
          </p>
        </Grid>
      </Grid>
    </Card>
  )
}