import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Title>Hello World!</Title>
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
