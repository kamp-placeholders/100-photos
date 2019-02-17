import React from 'react';
import Styled from './GalleryStyles.js';
import Modal from '../Modal/Modal.jsx';
import Carousel from '../Carousel/Carousel.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentImgId: 0,
      isOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    var id = e.currentTarget.id
    var newState = {
      currentImgId: id,
      isOpen: !this.state.isOpen
    }
    this.setState(newState);
  }

  render() {
    if (this.props.data.length > 9) {
      return (
        <div>

          <Styled.Gallery>
            <Styled.Layout>

              <Styled.Item1>
                <Styled.Button id={this.props.data[0].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[0].url}></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item1>

              <Styled.Item2>
                <Styled.Button id={this.props.data[1].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer >
                    <Styled.Photo src={this.props.data[1].url}></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item2>

              <Styled.Item3>
                <Styled.Button id={this.props.data[2].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[2].url}></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item3>

              <Styled.Item4>
                <Styled.Button id={this.props.data[3].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[3].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item4>

              <Styled.Item5>
                <Styled.Button id={this.props.data[4].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[4].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item5>

              <Styled.Item6>
                <Styled.Button id={this.props.data[5].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[5].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item6>

              <Styled.Item7>
                <Styled.Button id={this.props.data[6].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[6].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item7>

              <Styled.Item8>
                <Styled.Button id={this.props.data[7].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[7].url} ></Styled.Photo>
                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.Item8>

              <Styled.ItemLast>
                <Styled.Button id={this.props.data[8].id} onClick={this.toggleModal}>
                  <Styled.PhotoContainer>
                    <Styled.Photo
                      src={this.props.data[8].url} ></Styled.Photo>

                    <Styled.LastItemOverlay>+ {this.props.imgTotal - 9} more</Styled.LastItemOverlay>

                  </Styled.PhotoContainer>
                </Styled.Button>
              </Styled.ItemLast>

            </Styled.Layout>
          </Styled.Gallery>

          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <Carousel toggle={this.toggleModal} data={this.props.data} current={this.state.currentImgId} />
          </Modal>

        </div>
      )
    } else if(this.props.data.length < 9 && this.props.data.length !== 0){
      return (
      <Styled.Gallery>
        <Styled.SinglePhoto src={this.props.data[0].url}></Styled.SinglePhoto>
      </Styled.Gallery>
      )
    } else if (this.props.data.length === 0) {
      return <div></div>
    }
  }
}




export default Gallery; 