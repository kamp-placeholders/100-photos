import styled from 'styled-components';

const Gallery = styled.div`
  position: relative;
  justify-content: center;
`;

//TODO:at 355 px width, flip the grid...
const Layout = styled.ul`
  display: grid; 
  grid-gap: 1px;
  grid-template-columns: 23% 45% 15% 15%;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

  margin: 0 auto;
  list-style: none;
  padding-left: 0;
  padding-right: 0;
  overflow: hidden;
`;


const Item1 = styled.li`
  width:  100%
  grid-area: 1 / 1 / 4 / span 1;

  min-height: 0; 
  min-width: 0;
  margin: 2px;
  display: inline; 
  max-height: 100%; 
  max-width: 100%;
`;


const Item2 = styled.li`
  width: 100%;
  grid-area: 4 / 1 / end; 

  min-height: 0;  /* NEW */
  min-width: 0;
  margin: 2px;
  display: inline; 
  max-height: 100%; 
  max-width: 100%;

`;


const Item3 = styled.li`
  width: 100%;
  grid-area: 1 / 2 / end / span 1; 

  min-height: 0;  /* NEW */
  min-width: 0;
  display: inline; 
  max-height: 100%; 
  max-width: 100%;
  margin: 2px;
`;

const Item4 = styled.li`
  width: 100%;
  grid-area: 1 / 3 / span 2 / span 1; 

  display: inline; 
  max-height: 100%; 
  max-width: 100%;
  margin: 2px;

`;


const Item5 = styled.li`
  width: 100%;
  grid-area: 1 / 4 / span 2 / span 1; 
  
  min-height: 0;  /* NEW */
  min-width: 0;
  display: inline; 
  max-height: 100%; 
  max-width: 100%;
  margin: 2px;
`;

const Item6 = styled.li`
  width: 100%;
  grid-area: 3 / 3 / span 2 / span 1; 
 
  min-height: 0;  /* NEW */
  min-width: 0;
  display: inline; 
  max-height: 100%; 
  max-width: 100%;
  margin: 2px;
`;

const Item7 = styled.li`
  width: 100%;
  grid-area: 3 / 4 / span 2 / span 1; 

  min-height: 0;  /* NEW */
  min-width: 0;
  display: inline; 
  max-height: 100%; 
  max-width: 100%;
  margin: 2px;
`;

const Item8 = styled.li`
  width: 100%;
  grid-area: 5 / 3 / span 2 / span 1;
  
  display: inline; 
  max-height: 100%; 
  max-width: 100%;
  margin: 2px;
`;

const ItemLast = styled.li`
width: 100%;
grid-area: 5 / 4 / span 2 / span 1; 

min-height: 0;  /* NEW */
min-width: 0;
display: inline; 
max-height: 100%; 
max-width: 100%;
margin: 2px;
`;

const Button = styled.a`
border: 1px solid white; 
width: 100%;
height: 100%;
`;

const PhotoContainer = styled.div`
border: 1px solid white; 
width: 100%;
height: 100%;
`;

const Pic = styled.div`
background-color: grey;
width: 100%;
height: 100%;

`; 


export default {Pic, PhotoContainer, Button, ItemLast, Item6, Item7, Item8, Item5, Item4, Item3, Item2, Item1, Layout, Gallery}
