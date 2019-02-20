// import styled from 'styled-components';
const {styled} = window;

const Gallery = styled.div`
  position: relative;
  justify-content: center;
  max-height: auto; 
  max-width: auto;
  min-height: auto; 
  min-width: auto;
  display: inline;
`;

const SinglePhoto = styled.img`
  justify-content: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover; 
`;

const Layout = styled.ul`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: 23% 45% 15% 15%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  padding-right: 0;
`;

const Item1 = styled.li`
  max-height: 139px; 
  max-width: 139px;
  min-height: 76px; 
  min-width: 76px;
  grid-area: 1 / 1 / 4 / span 1;
  display: inline-block; 
`;

const Item2 = styled.li`
  max-height: 139px; 
  max-width: 139px;
  min-height: 76px; 
  min-width: 76px;
  grid-area: 4 / 1 / end; 
  display: inline-block; 
`;

const Item3 = styled.li`
  max-height: 280px; 
  max-width: 280px;
  min-height: 154px; 
  min-width: 154px;
  grid-area: 1 / 2 / end / span 1; 
  display: inline-block; 
`;

const Item4 = styled.li`
  max-height: 92px; 
  max-width: 92px;
  min-height: 50px; 
  min-width: 50px;
  grid-area: 1 / 3 / span 2 / span 1; 
  display: inline-block; 
`;


const Item5 = styled.li`
  max-height: 92px; 
  max-width: 92px;
  min-height: 50px; 
  min-width: 50px;
  grid-area: 1 / 4 / span 2 / span 1; 
  display: inline-block; 
`;

const Item6 = styled.li`
  max-height: 92px; 
  max-width: 92px;
  min-height: 50px; 
  min-width: 50px;
  grid-area: 3 / 3 / span 2 / span 1; 
  display: inline-block; 
`;

const Item7 = styled.li`
  max-height: 92px; 
  max-width: 92px;
  min-height: 50px; 
  min-width: 50px;
  grid-area: 3 / 4 / span 2 / span 1; 
  display: inline-block; 
`;

const Item8 = styled.li`
  max-height: 92px; 
  max-width: 92px;
  min-height: 50px; 
  min-width: 50px;
  grid-area: 5 / 3 / span 2 / span 1;
  display: inline-block; 
`;

const ItemLast = styled.li`
  max-height: 92px; 
  max-width: 92px;
  min-height: 50px; 
  min-width: 50px;
  grid-area: 5 / 4 / span 2 / span 1; 
  display: inline-block; 
`;

const Button = styled.a`
  position: relative;
  width: fill-available;
  height: fill-available;
`;

const PhotoContainer = styled.div`
  display: block;
  width: fill-available;
  height: fill-available;
  justify-content: center;
  position: relative;
  }
`;

const Photo = styled.img`
  justify-content: center;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-size: cover; 
`;

const LastItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  clear: float;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-align: center; 
  -webkit-font-smoothing: antialiased;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  font-size: 10px;
  font-weight: 200;
  line-height: 45px;

  :hover {
    background-color: rgba(0, 0, 0, 0.65);
  }
`;

export default { Photo, PhotoContainer, Button, LastItemOverlay, ItemLast, Item6, Item7, Item8, Item5, Item4, Item3, Item2, Item1, Layout, Gallery, SinglePhoto }
