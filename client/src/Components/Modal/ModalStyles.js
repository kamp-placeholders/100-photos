import styled from 'styled-components';

const BackDropStyle = styled.div`
background-color: rgba(0,0,0,0.5);
position: fixed;
height: 100%;
width: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
`;

const ModalStyle = styled.div`
background-color: '#fff',
border-radius: 5,
max-width: 500,
min-height: 300,
margin: '0 auto',
padding: 30
`;

const PhotoContent = styled.div`
  background-color: black;
`;


export default {BackDropStyle, ModalStyle, PhotoContent};