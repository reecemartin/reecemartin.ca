import React from "react"
import { css } from "@emotion/core"
import Button from "@material-ui/core/Button"

import Layout from "../layouts/layout";
import ProjectCard from "../components/projectCard";

import projects from "../../res/projects";

const breakpoints = [576, 768, 992, 1200]
const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`)

export default function Projects() {
  return (
    <Layout
      title="projects"
      description="learn more about the software projects i've made. "
    >
      <h1
        css={css`
          padding-top: 20px;
          text-align: center;
          font-size: 300%;
        `}
      >
        Projects
      </h1>

      <div
            css={css`
              width: 100%;
              position: relative;
              padding-bottom: 20px;
            `}
          >
          <a 
            href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=867U3N8UJHJB6&currency_code=CAD&source=url" target="_blank" 
            rel="noopener noreferrer"
            css={css`
              text-decoration: none;
              display: block;
              padding-bottom: 15px;
              min-width: 30%;
              position: absolute;
              left: 50%;
              /* bring your own prefixes */
              transform: translate(-50%,-30%);
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

      <div
        css={css`
          padding: 20px 5%;
        `}
      >
        {
          projects.map(project => (
            <ProjectCard
              project={project}
            />
          ))
        }
      </div>
    </Layout>
  )
}