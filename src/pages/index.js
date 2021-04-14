import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Attack on Tech"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `tech`, `javascript`, `react`, `programming`, `coding`, `anime`]}
        />
        {/* <img style={{ margin: 0 }} src="" alt="Gatsby Scene" /> */}
        <h1>
          Yo{" "}
          <span role="img" aria-label="wave emoji">
            💾
          </span>
        </h1>
        <p>Welcome to the onePunchProgrammer's blog.</p>
        
        <Link to="/blog/">
          <Button marginTop="35px">Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
