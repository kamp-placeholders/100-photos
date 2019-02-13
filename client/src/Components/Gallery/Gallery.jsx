import React from 'react';
import Styled from './GalleryStyles.js';

class Gallery extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Styled.Gallery>
          <Styled.Layout>
            <Styled.Item1>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic >Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item1>  
            
            <Styled.Item2>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item2> 

            <Styled.Item3>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item3> 

            <Styled.Item4>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic >Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item4>  
            
            <Styled.Item5>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item5> 


            <Styled.Item6>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item6> 

            <Styled.Item7>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.Item7>             

            <Styled.Item8>
                <Styled.Button>
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>

                </Styled.Button>
            </Styled.Item8> 

            <Styled.ItemLast>
                <Styled.Button>                 
                  <Styled.PhotoContainer>
                    <Styled.Pic>Hello World</Styled.Pic>
                  </Styled.PhotoContainer>
                </Styled.Button>
            </Styled.ItemLast> 


          </Styled.Layout>
        </Styled.Gallery>
    )
  }
}

export default Gallery; 