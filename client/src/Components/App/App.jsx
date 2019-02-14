import React from 'react';
import Styled from './AppStyles.js';
import axios from 'axios';
import Gallery from '../Gallery/Gallery.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      currentById: []
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
        //selects random restuarant id # to simulate get response id
        var randomId = Math.floor(Math.random() * 100) + 1;
        var allImages = this.state.data;
        var filteredById = allImages.filter((image) => {
          return Number(image.restaurant_id) === randomId
        })

        this.setState({
          currentById: filteredById
        });
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Styled.PhotoGallery>
        <Styled.Header>100 Photos</Styled.Header>
        <Gallery data={this.state.currentById} />
      </Styled.PhotoGallery>
    )
  }
}

export default App;
