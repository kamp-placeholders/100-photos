import React from 'react';
import Styled from './GalleryStyles.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    };

  }

  render() {
    console.log(this.props.data.length)
    if(this.props.data.length !== 0){
      return (
        <Styled.Gallery>
          <Styled.Layout>
  
            <Styled.Item1>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[0].url}></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item1>
  
            <Styled.Item2>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[1].url}></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item2>
  
            <Styled.Item3>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[2].url}></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item3>
  
            <Styled.Item4>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[3].url} ></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item4>
  
            <Styled.Item5>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[4].url} ></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item5>
  
            <Styled.Item6>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[5].url} ></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item6>
  
            <Styled.Item7>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[6].url} ></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item7>
  
            <Styled.Item8>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[7].url} ></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item8>
  
            <Styled.ItemLast>
              <Styled.Button>
                <Styled.PhotoContainer>
                  <Styled.Photo 
                  src={this.props.data[8].url} ></Styled.Photo>
                  <Styled.Overlay>+ 91 more</Styled.Overlay>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.ItemLast>
  
          </Styled.Layout>
        </Styled.Gallery>
      )
    } else {
      return <div></div>
    }
  }
}

export default Gallery; 