import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
          <div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <p>Recipes for meals that are quick and easy to prepare. Perfect for any workaholic with a lack of time... <span role={"img"} aria-label={"Emoji Story"}>⏳💼➡🏠👩‍🍳👍</span></p>
        </div>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title} <span role={"img"} aria-label={"Female Cook"}>👩‍🍳</span>
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, contribute on
          {` `}
          <a href="https://github.com/Capthiron/quick-meal-blog">Github</a>
          <span style={{float: "right"}}><a href={`/rss.xml`} target="_blank" rel="noopener noreferrer">RSS</a></span>
        </footer>
      </div>
    )
  }
}

export default Layout
