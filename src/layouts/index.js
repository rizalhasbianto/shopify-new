import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

import ContextProvider from '~/provider/ContextProvider'

import { 
GlobalStyle, 
Container
} from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
`
const FootWrapper = styled.div`
  margin: 0 auto;
  max-width: 100%;
  background:black;
`
const Grid = styled.div`
	display:block;
	width:33.333333%;
	`
const Icon = styled.span`
	    font-size: 20px;
    color: #7e7e7e;
    margin-right: 15px;
    `
    const ParentGrid = styled.div`
        display: flex;
        `

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                menuLinks {
              name
              link
            }
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
            <Wrapper>
              {children}
            </Wrapper>
            <footer>
               <div class="footer-top">
               	<FootWrapper>
               		<Container>
               		<ParentGrid>
               		<Grid>
               		<img src="https://cdn.shopify.com/s/files/1/0022/2380/0375/files/of_logo_400x.png?v=1576647342" />
               		</Grid>
               		<Grid>
               			<h2>MORE INFO</h2>
               			<li><a href="#">Contact</a></li>
               			<li><a href="#">Privacy Policy</a></li>
               			<li><a href="#">Refund Policy</a></li>
               			<li><a href="#">Terms of Service</a></li>
               		</Grid>
               		<Grid>
               		<h2>STAY CONNECTED</h2>
               		<li>Keep us locked in on social</li>
               		<Icon><FontAwesomeIcon icon={faFacebookF} /></Icon>
               		<Icon><FontAwesomeIcon icon={faYoutube} /></Icon>
               		<Icon><FontAwesomeIcon icon={faInstagram} /></Icon>
               		<Icon><FontAwesomeIcon icon={faEnvelope} /></Icon>
               		</Grid>
               		</ParentGrid>
               		</Container>
               	</FootWrapper>
               </div>
               <div class="footer-bottom">
               <FootWrapper>
               		<Container>
               		<div class="copy-right">
               		<span>© 2020<a href="#">OPEN FORMAT</a><a href="#">Developed by SKRATCHPAPER.</a></span>
               		</div>
               		</Container>
               	</FootWrapper>
               </div>
              </footer>
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
