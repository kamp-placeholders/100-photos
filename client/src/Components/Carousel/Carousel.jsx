import React from 'react';
import Styled from './CarouselStyles.js'


class Carousel extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photos: this.props.data, 
      currentId: Number(this.props.current),
      currentIndex: 0,
      currentPhoto: {}
    }

    this.leftClickHandler = this.leftClickHandler.bind(this);
    this.rightClickHandler = this.rightClickHandler.bind(this);
  }

  componentDidMount() {
    let allPhotos = this.state.photos; //array

    //find the current photo by the ID and display that. 
    //also, find the index of it and store it in state for the clickers

    let foundIndex = 0; 
    let foundCurrentPhoto = allPhotos.filter((item) => {
      if(item.id === this.state.currentId) {
        foundIndex = this.props.data.findIndex((e) => e.id === item.id);
      }
      return item.id === this.state.currentId; 
    });

  let newState = {
    currentIndex: foundIndex,
    currentPhoto: foundCurrentPhoto
  }
    this.setState(newState);
  }
  
  leftClickHandler(e) {
    console.log('left click')
  }

  rightClickHandler(e) {
    console.log('right click')

  }

  render() 
  {
    console.log('state', this.state);
    const i = this.state.index;
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
                      <div>
                        <Styled.Strong>{this.props.data[this.state.currentIndex].description}</Styled.Strong>{this.props.data[this.state.currentIndex].date}
                      </div>
                      <div>
                        {this.props.data[this.state.currentIndex].source}
                      </div>
                      <Styled.Flag src='/Users/acaciapappas/Desktop/placeholders/100-photos/client/dist/flag.png'/>
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