import React from 'react';
import Styled from './ModalStyles.js';


class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <Styled.BackDropStyle>
        <Styled.ModalStyle >
          {this.props.children}
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </Styled.ModalStyle >
      </Styled.BackDropStyle>
    );
  }
}

export default Modal;

