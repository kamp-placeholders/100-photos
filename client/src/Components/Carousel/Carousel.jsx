import React from 'react';
import Styled from './CarouselStyles.js';
import path from 'path';
const flagPath = path.join(__dirname, 'flag.png');


class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photos: this.props.data, 
      currentId: Number(this.props.current),
      currentIndex: 0,
      currentPhoto: {},
      shortDate: ''
    }

    this.leftClickHandler = this.leftClickHandler.bind(this);
    this.rightClickHandler = this.rightClickHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.props.current.split(''));
    let index = Number(this.props.current.split('').slice(5));
    var shortenedDate = this.props.data[index].date.split(' ').splice(0,4).join(' ');

    let newState = {
      currentIndex: index,
      currentPhoto: this.props.data[index],
      shortDate: shortenedDate
    }
      this.setState(newState);
  }

  leftClickHandler(e) {
    if (this.state.currentIndex === 0){
      let newState = {
        currentIndex: this.state.photos.length - 1
      }
      this.setState(newState);      
    } else {
      let newState = {
        currentIndex: this.state.currentIndex - 1
      }
      this.setState(newState);
    }
  }

  rightClickHandler(e) {
    let length = this.state.photos.length - 1
    if (this.state.currentIndex === length){
      let newState = {
        currentIndex: 0
      }
      this.setState(newState);      

    } else {
      let newState = {
        currentIndex: this.state.currentIndex + 1
      }
      this.setState(newState);
    }
  }

  render() 
  {
    return (
      <div>
        <Styled.Main>
                <Styled.LeftButton onClick={this.leftClickHandler}/>
            <Styled.Content>

                  <Styled.PhotoContainer>
                    <Styled.Photo src={this.props.data[this.state.currentIndex].url}></Styled.Photo>
                  </Styled.PhotoContainer>
          
                  <Styled.Description>
                    <Styled.Text>
                        <Styled.Strong>{this.props.data[this.state.currentIndex].description}</Styled.Strong> { this.state.shortDate}
                      <div>
                        {this.props.data[this.state.currentIndex].source}
                      </div>
                      <Styled.Flag src={flagPath}/>
                    </Styled.Text>
                  
                  </Styled.Description>

            </Styled.Content>
                <Styled.RightButton onClick={this.rightClickHandler}/>

        </Styled.Main>
        <Styled.Exit onClick={this.props.toggle}></Styled.Exit>
      </div>
    )
  }
}

export default Carousel;