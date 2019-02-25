import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start; 
  height: 280px; 
  max-width: 626px;

  div.photo {
    margin: .15%;
    box-sizing: border-box; 
    padding: 0; 
    height: 49%;
    width: 22.36%; 
    background-size: cover;
    background-position: center;
    .overlay {
      margin: 0px;
      padding: 0px;
      background-color: rgba(0, 0, 0, .5);
      height: 100%;
      width: 100%;
      position: relative; 
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      p {
        color: white;
      }
      
    }
    .overlay:hover {
      background-color: rgba(0, 0, 0, 0.65);
    }
  }

  #photo2 {
    height: 98.9%;
    width: 44.72%;
  }

  #photo3, #photo4, #photo5, #photo6, #photo7, #photo8 {
    height: 32.5%;
    width: 14.72%;
  }
`;

const SinglePhoto = styled.img`
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover; 
`;

export default {Gallery, SinglePhoto }
