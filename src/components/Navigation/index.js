import React, { useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import { 
	Wrappers,
	Container,
	CartCounter,
	MenuLink,
	MenuWrap,
	Links
} from './styles'

const countQuantity = lineItems => {
	let quantity = 0

	lineItems.forEach(item => {
		quantity = quantity + item.quantity
	});

	return quantity
}

const Navigation = ({ siteTitle, menuLinks }) => {
	const { store: {checkout} } = useContext(StoreContext)
	const [quantity, setQuantity] = useState(countQuantity(checkout ? checkout.lineItems : []))

	useEffect(() => {
		setQuantity(countQuantity(checkout ? checkout.lineItems : []))
	}, [checkout])

	return(
		<Wrappers>
			<Container>
				<MenuLink to='/'>
				<MenuWrap>
					donato
					</MenuWrap>
				</MenuLink>
          <nav class='main-menu'>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Links href={link.link}>
                    {link.name}
                  </Links>
                </li>
              ))}
            </ul>
          </nav>
          <div class="right-top">
          <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 37 40"><path d="M35.6 36l-9.8-9.8c4.1-5.4 3.6-13.2-1.3-18.1-5.4-5.4-14.2-5.4-19.7 0-5.4 5.4-5.4 14.2 0 19.7 2.6 2.6 6.1 4.1 9.8 4.1 3 0 5.9-1 8.3-2.8l9.8 9.8c.4.4.9.6 1.4.6s1-.2 1.4-.6c.9-.9.9-2.1.1-2.9zm-20.9-8.2c-2.6 0-5.1-1-7-2.9-3.9-3.9-3.9-10.1 0-14C9.6 9 12.2 8 14.7 8s5.1 1 7 2.9c3.9 3.9 3.9 10.1 0 14-1.9 1.9-4.4 2.9-7 2.9z"></path></svg>
				<MenuLink to='/cart'>
					{quantity !== 0 &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					<svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-cart" viewBox="0 0 37 40"><path d="M36.5 34.8L33.3 8h-5.9C26.7 3.9 23 .8 18.5.8S10.3 3.9 9.6 8H3.7L.5 34.8c-.2 1.5.4 2.4.9 3 .5.5 1.4 1.2 3.1 1.2h28c1.3 0 2.4-.4 3.1-1.3.7-.7 1-1.8.9-2.9zm-18-30c2.2 0 4.1 1.4 4.7 3.2h-9.5c.7-1.9 2.6-3.2 4.8-3.2zM4.5 35l2.8-23h2.2v3c0 1.1.9 2 2 2s2-.9 2-2v-3h10v3c0 1.1.9 2 2 2s2-.9 2-2v-3h2.2l2.8 23h-28z"></path></svg>
				</MenuLink>
				</div>
			</Container>
		</Wrappers>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
