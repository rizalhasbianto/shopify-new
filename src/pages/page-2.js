import React from 'react'
import { Link } from 'gatsby'
import $ from 'jquery'; 

import SEO from '~/components/seo'

const SecondPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <div class="yourclass">
    <div>your content test</div>
    <div>your content</div>
    <div>your content</div>
  </div>
    <script type="text/javascript">
    $(document).ready(function(){
      $('.yourclass').css('background','red')
    })
  </script>
  </>
)

export default SecondPage
