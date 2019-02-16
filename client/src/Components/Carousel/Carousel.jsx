import React from 'react';
import Styled from './CarouselStyles.js'

class Carousel extends React.Component {
  render() 
  {
    return <Styled.Exit onClick={this.props.toggle}></Styled.Exit>
  }
}

export default Carousel;