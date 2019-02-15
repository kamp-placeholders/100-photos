import styled from 'styled-components';

const BackDropStyle = styled.div`
display: b,
alignItems: center,
justifyContent: center,
position: fixed,
top: 0,
right: 0,
left: 0,
bottom: 0,
padding: 1rem,
background-color: rgba(0, 0, 0, 0.7),
z-index: 9999,
animation: show .5s ease,
overflow: hidden,
`;

const ModalStyle = styled.div`
background-color: '#fff',
borde-radius: 5,
max-width: 500,
min-height: 300,
margin: '0 auto',
padding: 30
`;

const PhotoContent = styled.div`
  background-color: black;
`;


export default {BackDropStyle, ModalStyle, PhotoContent};