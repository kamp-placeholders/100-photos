import React from 'react';
import data from '../../sampleData.js';
import Styled from './AppStyles.js';
import Gallery from '../Gallery/Gallery.jsx'

console.log(Gallery);
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: data
    }
  }

  render() {
    return (
      <Styled.PhotoGallery>
      <Styled.Header>100 Photos</Styled.Header>
         <Gallery/>
      </Styled.PhotoGallery>
    )
  }
}

export default App;
