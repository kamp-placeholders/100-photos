import styled from 'styled-components';

//minimum w/h => 330 X 280
const PhotoGallery = styled.div`
  padding: 5px;
  justify-content: center;
  position: static;
  max-height: 100%; 
  max-width: 613px;
  min-height: 100%; 
  min-width: 352px;
  `;

const Header = styled.h2`
  border-bottom: solid grey 1px;
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

export default { PhotoGallery, Header }