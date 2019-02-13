import React from 'react';
import Gallery from '../Gallery/Gallery.jsx';
import data from '../../sampleData.js';
import styled from 'styled-components';

// import Carousel from './Components/Carousel/Carousel.jsx';

const PhotoGallery = styled.div`
  border: 1px solid black; 
  display: block;
  margin: 0;
  width: minmax(360px, auto)
  height: minmax(50px, auto)
  position: relative;
`;

const Header = styled.h2`
border: 1px solid black; 
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  margin: 0 0 16px 0;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;s
  display: flex;
  justify-content: space-between;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    background-color: #f1f2f4;
  -webkit-font-smoothing: antialiased;
`;


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: data
    }
  }

  render() {
    return (
      <PhotoGallery>
        <Header>100 Photos</Header>
        <Gallery/>
      </PhotoGallery>
    )
  }
}

