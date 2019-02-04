import React from 'react';

const entryStyle = {
  paper: {
    height: '100%',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: '1px',
    textAlign: 'center'
  },
  img: {
    display: 'inline-block',
    height: '25%',
    width: '80%',
    margin: 20,
    textAlign: 'center',
    verticalAlign: 'middle',
    lineHeight: '90px',
    borderStyle: 'solid',
  }
};

export default class RelatedEntry extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={entryStyle.paper}>
        <div style={entryStyle.img}>{this.props.img}</div>
        <h1>{this.props.name}</h1>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}