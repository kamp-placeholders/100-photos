import styled from 'styled-components';

const Exit = styled.button`
  margin-top: 1px;
  margin-right: 2px;
  position:absolute;
  right: 5px;
  top: 5px;
  background-color: transparent;
  border: none;
  color: white;
  text-decoration: none;
  font-family: icons;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  content: "U";
  color: #6f737b;
  font-size: 1.2rem;
  line-height: 2;
  text-align: center;
  top: 16px;
  right: 16px;
  width: 2rem;
  
  :after {
    content: 'X'; 
    font: 16px/100% arial;
  }
`;
  
const Main = styled.div`
  display: grid; 
  grid-template-columns: 25% 50% 25%;
  width: 660px;
  height: auto; 
  min-height: 300px;
  min-height: 300px;
  justify-self: center;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  display: inline; 
  grid-area: auto / 2 / auto / span 1;
  justify-content: center; 
  top: 0;
  left: 0; 
  max-height: 490;
  max-width: 490;
  min-height: 300px;
  min-height: 300px;
`;

const LeftButton = styled.a`
  left: 22%;
  color: #91949a;
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  margin-left: 15%;
  left: 0;
  font-family: icons;
  font-style: normal;
  font-weight: 100;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  :after {
    content: '<'; 
  }
`;

const RightButton = styled.a`
  right: 24%;
  color: white; 
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  margin-right: 60%;
  font-family: icons;
  font-style: normal;
  font-weight: 100;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  
  :after {
    content: '>'; 
  }
`;

const PhotoContainer = styled.div`
display: inline-block; 
position: relative; 
  width: 320px;
  height: 320px;
  max-height: 490;
  max-width: 490;
  min-height: 200px;
  min-height: 200px;
  overflow: hidden; 
`;

const Photo = styled.img`
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover; 
  position: relative; 
`;

const Description = styled.div`
font-size: 8px;
  color: white; 
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  -webkit-font-smoothing: antialiased;
  display: block;
`;

const Text = styled.span`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;

`;

const Strong = styled(Text)`
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-weight: 700;
`;

const Flag = styled.a`
  display: inline;
  position: absolute; 
  top: 0;
  right: 0;
`;


export default {Exit, Content, Main, Flag, Photo, Text, Strong, PhotoContainer, Description, LeftButton, RightButton}