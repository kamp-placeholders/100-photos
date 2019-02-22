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
    if (this.props.data.length > 9 && this.props.data.length !== 0) {
      return (
        <div>
          <Styled.Gallery>
            {this.props.data.map((item, i) => {
              if (i < 8) {
                return (
                  <div
                    id={`photo${i}`}
                    key={item.id}
                    className="photo"
                    onClick={this.toggleModal}
                    style={{
                      backgroundImage: `url(${item.url})`
                    }}
                  />
                )
              }
            })}
            <div
              id="photo8"
              className="photo"
              onClick={this.toggleModal}
              style={{
                backgroundImage: `url(${this.props.data[8].url})`
              }}
            >
              <div class="overlay">
                <p>+ {this.props.imgTotal - 9} more</p>
              </div>
            </div>
          </Styled.Gallery>

          <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <Carousel toggle={this.toggleModal} data={this.props.data} current={this.state.currentImgId} />
          </Modal>

        </div>
      )
    } else if (this.props.data.length < 9 && this.props.data.length !== 0) {
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