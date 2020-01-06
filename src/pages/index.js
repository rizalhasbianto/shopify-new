import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery'
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'

class IndexPage extends React.Component {
  componentDidMount () {
    $(document).ready(function () {
        console.log('test')
    })
  }
  render () {
    return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ProductGrid />
    </>
    )
  }
}
export default IndexPage
