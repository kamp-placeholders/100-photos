import React from 'react';
import RelatedEntry from './relatedentry.jsx';

export default class Related extends React.Component {
  constructor() {
    super();

    this.state = {
      related: [
        {
          name: 'Rebelxt',
          desc: 'A great starting DSLR',
          img: 'PLACEHOLDER',
          price: 'contact seller'
        },
        {
          name: 'NokiaFlip',
          desc: 'A handheld high pixel camera',
          img: 'PLACEHOLDER',
          price: 'contact seller'
        },
        {
          name: 'RED Camera',
          desc: 'Top of the line video camera',
          img: 'PLACEHOLDER',
          price: 30000
        }
      ]
    };
  }

  render() {
    return (
      <div>
        {this.state.related.map((item) =>
          <RelatedEntry
            key={item.name}
            name={item.name}
            desc={item.desc}
            img={item.img}
            price={item.price}
          />
        )}
      </div>
    );
  }
}