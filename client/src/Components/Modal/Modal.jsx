import React from 'react';
import ReactDOM from 'react-dom';
import Styled from './ModalStyles.js';

const appRoot = document.getElementById('app');
const modalRoot = document.getElementById('modal');


class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }
    
    return ReactDOM.createPortal(
      <Styled.BackDropStyle>
        <Styled.ModalStyle >
          {this.props.children}
          <div className="footer">
          </div>
        </Styled.ModalStyle >
      </Styled.BackDropStyle>,
      this.el
      );
    }
  }
  
  export default Modal;
  
  