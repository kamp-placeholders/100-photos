import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../client/src/Components/Carousel/Carousel.jsx';
import dummyData from '../client/src/sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe("Carousel Component", () => {
  const wrapperMount = mount(<Carousel/>);
  const wrapperShallow = shallow(<Carousel/>);
  wrapperMount.setProps = {
    data: dummyData
  }
  test("renders", () => {
    expect(wrapperShallow.exists()).toBe(true);
  })
  test("match snapshot", () => {
    expect(wrapperMount).toMatchSnapshot()
  })
  test("an exit button exists and works", () => {
    expect(
      wrapperMount.find('button').text()
    ).toEqual('X').simulate('click');
  })
  test("right and left buttons work", () => {
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