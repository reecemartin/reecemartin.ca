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
