import styled from 'styled-components';

const Overlay = styled.main`
display: 'flex';
alignItems: 'center';
justifyContent: 'center';
position: 'fixed';
top: 0;
right: 0;
left: 0;
bottom: 0;
padding: '1rem';
backgroundColor: 'rgba(0, 0, 0, 0.7)';
zIndex: '9999';
opacity: 1;
animation: 'show .5s ease';
overflowX: 'hidden';
overflowY: 'auto';
`;

const Exit = styled.a`

`;

const PhotoContent = styled.div`

`;


export default {Overlay, Exit, PhotoContent};