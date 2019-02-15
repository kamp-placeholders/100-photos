import React from 'react';
import Styled from './GalleryStyles.js';
import Modal from '../Modal/Modal.jsx'

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImg: {},
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({
      currentImg: e.target.value,
      isOpen: !this.state.isOpen
    });
  }

  render() {
    console.log('state', this.state)
    if (this.props.data.length !== 0) {
      return (
        <div>

          <Styled.Gallery>
            <Styled.Layout>

              <Styled.Item1>
                <Styled.Button value={this.props.data[0]} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[0].url}></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item1>

              <Styled.Item2>
                <Styled.Button value={this.props.data[1].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[1].url}></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item2>

              <Styled.Item3>
                <Styled.Button value={this.props.data[2].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[2].url}></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item3>

              <Styled.Item4>
                <Styled.Button value={this.props.data[3].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[3].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item4>

              <Styled.Item5>
                <Styled.Button value={this.props.data[4].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[4].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item5>

              <Styled.Item6>
                <Styled.Button value={this.props.data[5].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[5].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item6>

              <Styled.Item7>
                <Styled.Button value={this.props.data[6].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[6].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item7>

              <Styled.Item8>
                <Styled.Button value={this.props.data[7].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[7].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item8>

              <Styled.ItemLast>
                <Styled.Button value={this.props.data[8].url} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo
                      src={this.props.data[8].url} ></Styled.Photo>

                    <Styled.LastItemOverlay>+ {this.props.imgTotal - 9} more</Styled.LastItemOverlay>

                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.ItemLast>

            </Styled.Layout>
          </Styled.Gallery>

          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>
            This is my Modal Content
          </Modal>
          
        </div>
      )
    } else {
      return <div></div>
    }
  }
}



export default Gallery; 