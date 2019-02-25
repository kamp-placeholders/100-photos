import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Carousel from './Carousel.jsx';
import Styled from './CarouselStyles.js'
import Adapter from 'enzyme-adapter-react-16';
import dummyData from '../../sampleData.js';

Enzyme.configure({ adapter: new Adapter() })

describe("Carousel Component", () => {
  const props = {
    toggle: jest.fn(),
    data: dummyData,
    current: "photo8"
  }
  const wrapper = shallow(<Carousel {...props}/>);
  test("renders", () => {
    expect(wrapper.exists()).toBe(true);
  })
  test("left button exists and works", () => {
    const mockFn = jest.fn();
    const leftButton = shallow(<Styled.LeftButton id="leftButton" onClick={mockFn}/>)
    leftButton.find('#leftButton').simulate('click');
    expect(mockFn).toBeCalled();
  })
  test("right button exists and works", () => {
    const mockFn = jest.fn();
    const leftButton = shallow(<Styled.RightButton id="rightButton" onClick={mockFn}/>)
    leftButton.find('#rightButton').simulate('click');
    expect(mockFn).toBeCalled();
  })
  test("exit button exists and works", () => {
    const mockFn = jest.fn();
    const leftButton = shallow(<Styled.Exit id="exitButton" onClick={mockFn}/>)
    leftButton.find('#exitButton').simulate('click');
    expect(mockFn).toBeCalled();
  })
  test("exit button exists and works", () => {
    const mockFn = jest.fn();
    const leftButton = shallow(<Styled.Exit id="exitButton" onClick={mockFn}/>)
    leftButton.find('#exitButton').simulate('click');
    expect(mockFn).toBeCalled();
  })
});
