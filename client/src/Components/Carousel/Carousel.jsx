import React from 'react';
import Styled from './CarouselStyles.js'


class Carousel extends React.Component {
  render() 
  {
    let i = 0;
    return (
      <div>
        <Styled.Main>
                <Styled.LeftButton>click</Styled.LeftButton>
            <Styled.Content>

                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[i].url}></Styled.Photo>
                  </Styled.PhotoContainer>
          
                  <Styled.Description>{this.props.data[i].description}</Styled.Description>

            </Styled.Content>
                <Styled.RightButton>Click</Styled.RightButton>

        </Styled.Main>
        <Styled.Exit onClick={this.props.toggle}></Styled.Exit>
      </div>
    )
  }
}

export default Carousel;