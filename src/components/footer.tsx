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
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()}, {data.site.siteMetadata.title}
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
