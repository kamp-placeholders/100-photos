import React from 'react';
import Styled from './AppStyles.js';
import axios from 'axios';
import Gallery from '../Gallery/Gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    let setId; 
    if(window.location.pathname === "/") {
      setId = "/1/"; 
    } else {
      setId = window.location.pathname
    }  
    
    axios.get(`http://ec2-54-85-101-227.compute-1.amazonaws.com/photos${setId}`)
      .then((response) => {
        let newState = {
          data: response.data
        }
        this.setState(newState);
      })
      .catch(function (error) {
        console.log(response)
        console.log(error);
      });
  }

  render() {
    var photos = this.state.data; 
    var numPhotos = photos.length;
    var relativeHeader = '';
    console.log('before slice', numPhotos);
    if(numPhotos > 100) {
      photos = photos.slice(0, 100);
    }
    console.log('after slice', numPhotos);

    if (numPhotos > 1) {
      relativeHeader = numPhotos + ' Photos';
    } else if (numPhotos === 1) {
      relativeHeader = '1 Photo';
    } else if (numPhotos === 0) {
      relativeHeader = '0 Photos'
    }

    return (
      <Styled.PhotoGallery>
        <Styled.Header>{relativeHeader}</Styled.Header>
        <Gallery data={this.state.data} imgTotal={numPhotos} />
      </Styled.PhotoGallery>
    )
  }
}

export default App;