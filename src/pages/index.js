import React from "react"
import Layout from "../components/layout"
import TokensWrapper from "../components/TokensWrapper/TokensWrapper"
import SEO from "../components/seo"
import './index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <TokensWrapper />
    </Layout>
  )
}

export default IndexPage
