import React from "react"
import { Link } from 'gatsby'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SEO from '~/components/seo'
const test="test"
export default class SlickGoToo extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
      {test}
        <h2 onClick={e => this.slider.slickGoTo(1)}>Slick Go To</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            1
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
        </Slider>
      </div>
    );
  }
}