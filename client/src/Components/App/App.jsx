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
          data: response.data
        });
      })

      .then(() => {
        //selects random restuarant id # to simulate get response.data.id
        var randomId = Math.floor(Math.random() * 100) + 1;
        var allImages = this.state.data;

        let filteredById = allImages.filter((image) => {
          return Number(image.restaurant_id) === randomId
        })
        
        var relativeHeader = '';
        console.log(this.state.data.length);

        var length = filteredById.length; 
        if(length > 1){
          relativeHeader = length + ' Photos';
        } else if (length === 1) {
          relativeHeader = '1 Photo';
        } else if(length === 0) {
          relativeHeader = '0 Photos'
        }

        console.log(randomId, filteredById)
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
