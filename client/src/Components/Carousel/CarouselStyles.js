import styled from 'styled-components';

const Exit = styled.button`
  margin-top: 1px;
  margin-right: 2px;
  position:absolute;
  font: 16px/100% arial, sans-serif;
  right: 5px;
  top: 5px;
  background-color: transparent;
  border: none;
  color: white;
  text-decoration: none;
  font-family: icons;
  speak: none;
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
  }
`;
  
const Main = styled.div`
  display: grid; 
  grid-template-columns: 20% 60% 20%;
  border: solid white 1px;
  width: 660px;
  min-height: 300px;
  min-height: 300px;
  justify-self: center;
  justify-content: center;
  position: relative;
`;

const Content = styled.div`
border: solid green 2px;
position: absolute;
display: inline; 
grid-area: auto / 2 / auto / span 1
justify-content: center; 

  width: 400px;
  height: auto;
  max-height: 590;
  max-width: 590;
  min-height: 300px;
  min-height: 300px;
`;

const LeftButton = styled.a`
  left: 0;
  color: #91949a;
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  left: 0;
  font-family: icons;
  speak: none;
  font-style: normal;
  font-weight: 700;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  content: ">";
`;

const RightButton = styled.a`
  right: 0;
  color: white; 
  font-size: 1.2rem;
  position: absolute;
  top: 50%;
  font-family: icons;
  speak: none;
  font-style: normal;
  font-weight: 700;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  content: "<";
`;

const PhotoContainer = styled.div`
border: solid pink 1px;

display: inline; 
  width: 300px;
  height: 300px
  max-height: 590;
  max-width: 590;
  min-height: 200px;
  min-height: 200px;
`;

const Photo = styled.img`
border: solid red 1px;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover; 
  position: relative; 
`;

const Description = styled.div`
  color: white; 
`;


export default {Exit, Content, Main, Photo, PhotoContainer, Description, LeftButton, RightButton}