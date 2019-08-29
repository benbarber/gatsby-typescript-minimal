import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FooterContainer = styled.footer``

const Copyright = styled.p`
  text-align: center;
  font-size: 0.8rem;
  margin: 2rem 0;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <Copyright>
        <a href={data.site.siteMetadata.siteUrl}>
          {data.site.siteMetadata.title}
        </a> | <a href="https://www.gatsbyjs.org">
          Gatsby
        </a>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
