import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
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
               	<Wrapper>
               	<div class="grid-one-half">
               		<h3>Quick Links</h3>
               		<a href="#">Search</a>
               	</div>
               	<div class="grid-one-half">
               	<h3>Newsletter</h3>
               		<div class="subscribe">
               			<input type="text" name="subs" class="name" />
               			<input type="submit" name="submit" value="subscribe" class="submit"/>
               		</div>
               	</div>
               	</Wrapper>
               </div>
               <div class="footer-bottom">
               <Wrapper>
               	<div class="footer-sosmed">
               	<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 512 512"><path d="M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z"></path><path d="M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"></path><circle cx="390.5" cy="121.5" r="30.2"></circle></svg>
               	<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-vimeo" viewBox="0 0 20 20"><path fill="#444" d="M.215 6.814l.899 1.203q1.249-.929 1.508-.929.99 0 1.843 3.153l.746 2.826q.517 1.958.807 3.009 1.127 3.153 2.833 3.153 2.712 0 6.581-5.21 3.793-4.951 3.93-7.83v-.335q0-3.504-2.803-3.595h-.213q-3.763 0-5.179 4.616.823-.35 1.432-.35 1.295 0 1.295 1.341 0 .168-.015.35-.091 1.082-1.28 2.955-1.219 1.965-1.813 1.965-.792 0-1.401-2.986-.183-.701-.777-4.524-.259-1.645-.96-2.437-.609-.686-1.523-.701-.122 0-.259.015-.96.091-2.849 1.752-.975.914-2.803 2.559z"></path></svg>
               	<span class="copy">© 2019, Twelves Supply Powered by Donato</span>
               	</div>
               	<div class="payment">
               	<ul class="payment-icons list--inline site-footer__icon-list">
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" role="img" width="38" height="24" viewBox="0 0 165.521 105.965" aria-labelledby="pi-apple_pay"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"></path><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"></path><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"></path><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"></path></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"></path><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"></path><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"></path></g></g></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-diners_club"><title id="pi-diners_club">Diners Club</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z" fill="#3086C8"></path></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-discover"><title id="pi-discover">Discover</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M37 16.95V21c0 1.1-.9 2-2 2H23.228c7.896-1.815 12.043-4.601 13.772-6.05z" fill="#EDA024"></path><path fill="#494949" d="M9 11h20v2H9z"></path><path d="M22 12c0 1.7-1.3 3-3 3s-3-1.4-3-3 1.4-3 3-3c1.7 0 3 1.3 3 3z" fill="#EDA024"></path></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" width="38" height="24" role="img" aria-labelledby="pi-jcb" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg"><title id="pi-jcb">JCB</title><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path></g><path d="M11.5 5H15v11.5a2.5 2.5 0 0 1-2.5 2.5H9V7.5A2.5 2.5 0 0 1 11.5 5z" fill="#006EBC"></path><path d="M18.5 5H22v11.5a2.5 2.5 0 0 1-2.5 2.5H16V7.5A2.5 2.5 0 0 1 18.5 5z" fill="#F00036"></path><path d="M25.5 5H29v11.5a2.5 2.5 0 0 1-2.5 2.5H23V7.5A2.5 2.5 0 0 1 25.5 5z" fill="#2AB419"></path><path d="M10.755 14.5c-1.06 0-2.122-.304-2.656-.987l.78-.676c.068 1.133 3.545 1.24 3.545-.19V9.5h1.802v3.147c0 .728-.574 1.322-1.573 1.632-.466.144-1.365.221-1.898.221zm8.116 0c-.674 0-1.388-.107-1.965-.366-.948-.425-1.312-1.206-1.3-2.199.012-1.014.436-1.782 1.468-2.165 1.319-.49 3.343-.261 3.926.27v.972c-.572-.521-1.958-.898-2.919-.46-.494.226-.737.917-.744 1.448-.006.56.245 1.252.744 1.497.953.467 2.39.04 2.919-.441v1.01c-.358.255-1.253.434-2.129.434zm8.679-2.587c.37-.235.582-.567.582-1.005 0-.438-.116-.687-.348-.939-.206-.207-.58-.469-1.238-.469H23v5h3.546c.696 0 1.097-.23 1.315-.415.283-.25.426-.53.426-.96 0-.431-.155-.908-.737-1.212zm-1.906-.281h-1.428v-1.444h1.495c.956 0 .944 1.444-.067 1.444zm.288 2.157h-1.716v-1.513h1.716c.986 0 1.083 1.513 0 1.513z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shopify Pay</title><g fill-rule="nonzero" fill="none"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#4D5CB7"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#5C6AC4"></path><path d="M12.892 7.934l-.835-.063-.614-.61a.128.128 0 00-.052-.031l-.395 9.12 3.118-.678-1.132-7.654a.1.1 0 00-.09-.084zm-2.81-.35v-.108c0-.33-.045-.597-.12-.808.297.037.494.374.62.76-.148.047-.317.1-.5.156zm-.653 3.295s-.346-.185-.77-.185c-.622 0-.653.39-.653.488 0 .537 1.398.742 1.398 2 0 .988-.627 1.625-1.473 1.625-1.014 0-1.534-.632-1.534-.632l.272-.897s.534.457.984.457a.397.397 0 00.413-.4c0-.7-1.148-.731-1.148-1.882 0-.967.695-1.904 2.098-1.904.54 0 .807.155.807.155l-.394 1.175zm-.23-4.52a.3.3 0 01.171.057c-.428.202-.888.71-1.081 1.723l-.817.254c.227-.774.766-2.035 1.727-2.035v.001zm.533 1.276v.058l-1.034.32c.199-.768.572-1.14.898-1.28.082.207.136.503.136.902zm1.487-.402l-.31.095c-.185-.532-.51-1.02-1.085-1.02-.016 0-.032 0-.048.002-.163-.216-.365-.31-.54-.31C7.899 6 7.261 7.671 7.06 8.52l-.935.29c-.29.092-.3.1-.337.374C5.759 9.39 5 15.258 5 15.258l5.855 1.097.395-9.13a.32.32 0 00-.031.008zm7.394 4.348c.143.022.286.044.506.044.97 0 1.498-.727 1.498-1.443 0-.65-.43-.914-1.024-.914-.242 0-.43.01-.55.044l-.43 2.269zm-.848-3.36c.462-.11 1.157-.176 1.796-.176.616 0 1.376.11 1.894.518.44.341.694.87.694 1.498a2.71 2.71 0 01-.991 2.126c-.573.462-1.4.672-2.225.672-.21 0-.408-.022-.551-.034l-.518 2.688h-1.487l1.388-7.292zm7.715 2.985a1.485 1.485 0 00-.385-.044c-.991 0-1.663 1.421-1.663 2.358 0 .517.165.87.573.87.451 0 .969-.562 1.2-1.785l.276-1.399h-.001zm-.473 4.308c.01-.309.044-.65.066-1.014h-.034c-.473.837-1.112 1.124-1.674 1.124-.914 0-1.498-.727-1.498-1.796 0-1.762 1.09-3.822 3.646-3.822a5.94 5.94 0 011.664.253l-.573 2.875c-.132.683-.232 1.73-.22 2.38h-1.377zm4.357-5.247l.242 2.284c.067.54.11.925.132 1.277h.023c.12-.363.231-.705.451-1.289l.926-2.272h1.586l-1.862 3.848c-.66 1.366-1.3 2.368-1.994 3.018-.54.507-1.178.76-1.487.826l-.418-1.289c.306-.1.595-.245.859-.43a2.6 2.6 0 00.826-.914c.044-.077.055-.143.033-.253l-.843-4.806h1.526z" fill="#FFF"></path></g></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" width="38" height="24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="pi-venmo"><title id="pi-venmo">Venmo</title><g fill="none" fill-rule="evenodd"><rect fill-opacity=".07" fill="#000" width="38" height="24" rx="3"></rect><path fill="#3D95CE" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M24.675 8.36c0 3.064-2.557 7.045-4.633 9.84h-4.74L13.4 6.57l4.151-.402 1.005 8.275c.94-1.566 2.099-4.025 2.099-5.702 0-.918-.154-1.543-.394-2.058l3.78-.783c.437.738.634 1.499.634 2.46z" fill="#FFF" fill-rule="nonzero"></path></g></svg>
                  </li>
                  <li class="payment-icon">
                    <svg class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
                  </li>
              </ul>
               	</div>
               	</Wrapper>
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
