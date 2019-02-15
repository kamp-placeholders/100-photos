import React from 'react';
import Styled from './GalleryStyles.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      currentImg: {}
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    var newState = {
      showModal: true,
      currentImg: e.target.value
    };
    this.setState(newState);

    console.log('click', this.state.currentImg, 'modal:', this.state.showModal)
  }

  render() {
    if(this.props.data.length !== 0){
      return (
        <Styled.Gallery>
          <Styled.Layout>
  
            <Styled.Item1>
              <Styled.Button value={this.props.data[0]} onClick={this.clickHandler}>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[0].url}></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item1>

            <Styled.Item2>
              <Styled.Button value={this.props.data[1].url} onClick={this.clickHandler}>
                <Styled.PhotoContainer>
                  <Styled.Photo src={this.props.data[1].url}></Styled.Photo>
                </Styled.PhotoContainer>
              </Styled.Button>
            </Styled.Item2>
  
            <Styled.Item3>
              <Styled.Button value={this.props.data[2].url} onClick={this.clickHandler}>
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

                  <Styled.LastItemOverlay>+ {this.props.imgTotal - 9} more</Styled.LastItemOverlay>
                  
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