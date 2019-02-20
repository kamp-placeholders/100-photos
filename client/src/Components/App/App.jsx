import React from 'react';
import Styled from './AppStyles.js';
import axios from 'axios';
import Gallery from '../Gallery/Gallery.jsx';
import dummyData from '../../sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      numOfImages: 0,
      header: ''
    }
  }

  componentDidMount() {
    // var randomId = Math.floor(Math.random() * 100) + 1; // => use this to dynamically render
    var setId = 1;
    axios.get(`http://localhost:3002/api/photos/${setId}`)

      .then((response) => {
        var photos = response.data;
        var relativeHeader = '';

        var length = photos.length;
        if (length > 1) {
          relativeHeader = length + ' Photos';
        } else if (length === 1) {
          relativeHeader = '1 Photo';
        } else if (length === 0) {
          relativeHeader = '0 Photos'
        }

        let newState = {
          data: photos,
          numOfImages: photos.length,
          header: relativeHeader
        }

        this.setState(newState);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log("state", this.state);
    return (
      <Styled.PhotoGallery>
        <Styled.Header>{this.state.header}</Styled.Header>

        <Gallery data={this.state.data} imgTotal={this.state.numOfImages} />

      </Styled.PhotoGallery>
    )
  }
}

export default App;
