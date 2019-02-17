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
      currentById: [],
      numOfImages: 0,
      header: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/photos')

      .then((response) => {
        this.setState({
          data: []
        });
      })

      .then(() => {
        //selects random restuarant id # to simulate get response.data.id
        var randomId = Math.floor(Math.random() * 100) + 1;
        var allImages = this.state.data;
        var filteredById, relativeHeader = '';

        console.log(this.state.data.length);
        if(this.state.data.length > 1){
          filteredById = allImages.filter((image) => {
            return Number(image.restaurant_id) === randomId
          })
          relativeHeader = this.state.data.length + ' Photos';
        } else if (this.state.data.length === 1) {
          filteredById = this.state.data; 
          relativeHeader = '1 Photo';
        } else if(this.state.data.length === 0) {
          filteredById = [];
          relativeHeader = '0 Photos'
        }

        let newState = {
          data: this.state.data,
          currentById: filteredById,
          numOfImages: filteredById.length,
          header: relativeHeader
        }

        this.setState(newState);
      })


      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.log(this.state)
    return (
      <Styled.PhotoGallery>
        <Styled.Header>{this.state.header}</Styled.Header>

        <Gallery data={this.state.currentById} imgTotal={this.state.numOfImages}/>

      </Styled.PhotoGallery>
    )
  }
}

export default App;
