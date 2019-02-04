import React from 'react';

const infoStyle = {
  float: 'left',
  width: '50%',
  height: '50%',
  borderStyle: 'solid',
  borderWidth: '2px',
  textAlign: 'center'
};

export default class Info extends React.Component {
  constructor() {
    super();

    this.state = {
      item: {
        ID: '252120z',
        location: 'Albany, NY',
        condition: 'Brand New',
        name: 'CanonEOS 40d',
        price: 499
      },
      currentBid: 499
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let newBid = this.state.currentBid + 1;
    let item = Object.assign({}, this.state.item);
    item.price = newBid;
    this.setState({
      currentBid: newBid,
      item: item
    });
  }

  render() {
    return (
      <div style={infoStyle}>
        <p>
          <span>
            Auction: {this.state.item.ID}
          </span>
          <br/>
          <span>
            For sale is a <em>
              {this.state.item.condition}
            </em> <strong>
              {this.state.item.name}
            </strong>
          </span>
          <br />
          <span>
            Current Bid: ${this.state.item.price}
          </span>
          <button onClick={(e) => {this.handleClick(e)}}>
          Bid
          </button>
        </p>
      </div>
    );
  }
}
