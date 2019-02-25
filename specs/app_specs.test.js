import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import App from '../client/src/Components/App/App.jsx';
import * as AppStyles from '../client/src/Components/App/AppStyles.js';
import Carousel from '../client/src/Components/Carousel/Carousel.jsx';
import * as CarouselStyles from '../client/src/Components/Carousel/CarouselStyles.js';
import Gallery from '../client/src/Components/Gallery/Gallery';
import * as GalleryStyles from '../client/src/Components/Gallery/GalleryStyles.js'

import Adapter from 'enzyme-adapter-react-16';
import dummyData from '../client/src/sampleData.js';


Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  test("renders", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  })
  test("mounts", () => {
      const wrapper = shallow(<App/>);
      expect(wrapper.exists()).toBe(true);
  });
  it("works", () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  test("data in state present after mounting", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('data')).toBeTruthy();
    expect(wrapper.state('numOfImages')).toBeGreaterThanOrEqual(0)
  })
});

describe("Gallery component", () => {
  const wrapperMount = shallow(<Gallery/>);
  wrapperMount.setProps = {
    data: dummyData
  }
  test("renders", () => {
      expect(wrapperMount.exists()).toBe(true);
    })
  test("snapshot", () => {
    expect(wrapperMount).toMatchSnapshot()
  });
  test("images are buttons", () => {
    wrapperMount.find('a').simulate('click');
  })
  });


describe("Carousel Component", () => {
  const wrapperMount = shallow(<Carousel/>);
  const wrapperShallow = shallow(<Carousel/>);
  wrapperMount.setProps = {
    data: dummyData
  }
  test("renders", () => {
    expect(wrapperShallow.exists()).toBe(true);
  })
  // test("matches snapshot", () => {
  //   expect(wrapperMount).toMatchSnapshot()
  // })
  test("exit button exists and works", () => {
    expect(
      wrapperMount.find('button').text()
    ).toEqual('X').simulate('click');
  })
  test("include right and left buttons", () => {
    expect(
      wrapperMount.find('button').toEqual('<').simulate('click')
      );
    expect(
      wrapperMount.find('button').toEqual('>').simulate('click')
    );
  })
  test("contains image element", () => {
    expect(
      wrapperMount.find('img').hasClass('CarouselStyles__Photo-ocec9w-6 hBPtId')
    )
  })
});
