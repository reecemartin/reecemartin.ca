import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Reece Martin's Website</h1>

      <Link 
        to="/posts"
        css={css`
                color: inherit;
              `}
        >
        <h3>My Blog Posts</h3>
      </Link>
    </div>
  )
}
