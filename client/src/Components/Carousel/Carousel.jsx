import React from 'react';
import Styled from './CarouselStyles.js'


class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  render() 
  {
    console.log(this.props.data[0]);
    let i = 0;
    return (
      <div>
        <Styled.Main>
                <Styled.LeftButton/>
            <Styled.Content>

                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[i].url}></Styled.Photo>
                  </Styled.PhotoContainer>
          
                  <Styled.Description>
                    <Styled.Text>
                      <div>
                        <Styled.Strong>{this.props.data[i].description}</Styled.Strong>{this.props.data[i].date}
                      </div>
                      <div>
                        {this.props.data[i].source}
                      </div>
                    </Styled.Text>
                  
                  </Styled.Description>

            </Styled.Content>
                <Styled.RightButton/>

        </Styled.Main>
        <Styled.Exit onClick={this.props.toggle}></Styled.Exit>
      </div>
    )
  }
}

export default Carousel;