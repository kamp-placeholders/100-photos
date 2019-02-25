import styled from 'styled-components';
const {styled} = window;

//minimum w/h => 330 X 280
const PhotoGallery = styled.div`
  padding: 5px;
  justify-content: center;
  max-height: 100%; 
  min-height: 100%; 
  position: relative;
  `;

const Header = styled.h2`
  border-bottom: solid grey 0.2px;
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

export default { PhotoGallery, Header }