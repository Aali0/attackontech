import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"


import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
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
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
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
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <hr />
          <main>{children}</main>
          
        </div>
        <Footer>
          © 2021 Ahmed Ali | 
          {` `}
          <a href="https://www.onepunchprogrammer.com">My Site</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background: #F7F9FB;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 100vh;
  padding-bottom: 2.5rem;
  position: relative;
`

const Footer = styled.footer`
  bottom: 0;
  flex: 1;
  height: 2.5rem;
  padding-top: 15px;
  position: absolute; 
  text-align: center;
  width: 100%;
`

export default Layout