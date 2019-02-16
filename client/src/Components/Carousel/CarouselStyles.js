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
  



export default {Exit}