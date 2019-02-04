import React from 'react';

export default class Reviews extends React.Component {
  constructor() {
    super();

    this.state = {
      satisfied: 'I love this product!!',
      unhappy: 'Arrived late and damaged :('
    };
  }

  render() {
    return (
      <div>
        <div>
          <h3><strong>JenSpring50214</strong> "{this.state.satisfied}"</h3>
          <p>
            My new camera is awesome! I just went on a trip to the Bahamas and I got so many amazing photos due to the zero vibration calibration system! WOW so easy to use, just point and click! I feel like I could be the next Ansel Adams with how nice the photos come out.
          </p>
          <span>Verified Buyer 2010</span>
        </div>
        <div>
          <h3><strong>SpaceCadetHero421</strong> "{this.state.unhappy}"</h3>
          <p>I bought this item from yourphotogrpahywarehouse hoping to replace my old starter DSLR. I was extremely dissapointed when it arrived with the lens cracked in half due to poor packaging. I would not purchase from yourphotographywarehouse ever again.</p>
          <span>Verified Buyer 2011</span>
        </div>
      </div>
    );
  }
}