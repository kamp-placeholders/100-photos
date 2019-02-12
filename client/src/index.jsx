import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import data from './sampleData.js'

import Gallery from './Components/Gallery/Gallery.jsx';
import Carousel from './Components/Carousel/Carousel.jsx';

//remove all borders when ready to map images...
const PhotoGallery = styled.div`
  border: 1px solid black; 
  margin: 0;
  paddig: 5px; 
`;

const Header = styled.h2`
border: 1px solid black; 
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 16px;
  margin: 0 0 16px 0;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: flex;
  justify-content: space-between;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    background-color: #f1f2f4;
  -webkit-font-smoothing: antialiased;
`;

//gallery container (class component container)
const Gallery = styled.div`

`;

const Layout = styled.ul`
border: 1px solid black; 
  width: calc(100% + 2px);
  overflow: hidden;
  position: relative;
`;

const Item = styled.li`
border: 1px solid black; 
  width: calc(23.07692% - 2px);
  height: auto;
  float: left;
  box-sizing: content-box;
  list-style: none;
  margin: 0;
  padding: 0;
  display: list-item;
  text-align: -webkit-match-parent;
`;

const Button = styled.a`
border: 1px solid black; 
  background: 0 0;
  color: #fff;
  display: inline-block;
  height: 100%;
  margin: 0 auto;
  text-decoration: none;
  width: 100%;
`;

const PhotoContainer = styled.div`
border: 1px solid black; 
  position: relative;
  margin: 0;
  padding: 0;
  display: block;
`;

const Image = styled.img`
border: 2px solid black; 
  width: 100%;
  max-width: 100%;
  height: auto;
  -ms-interpolation-mode: bicubic;
  display: inline-block;
  vertical-align: middle;
  border: 0;
  
`;

/*
if there are not any photos, render 0 photos in text. 
if there are less than 6 photos, render just one photos
if there are more than 9 photos, render all nine and the bottom right hand image will say "+ N more "

in the last case, if there are more than 9 or more photos, 
when a user clicks on one of the photos, it will 
switch displays to the slide show experience. 
*/


class App extends React.Component {
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
        <Gallery>
          <Layout>
            <Item>
                <Button>Hello World
                  <PhotoContainer>
                    <Image>Hello World</Image>
                  </PhotoContainer>
                </Button>
            </Item>                                   
          </Layout>
        </Gallery>
      </PhotoGallery>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));


module.hot.accept();
