import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from '../client/src/Components/Carousel/Carousel.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe("Carousel Component", () => {
  test("renders", () => {
    const wrapper = shallow(<Carousel/>);
    expect(wrapper.exists()).toBe(true);
  })
  test("match snapshot", () => {
    const wrapper = mount(<Carousel/>);
    expect(wrapper).toMatchSnapshot()
  })
  test("an exit button exists", () => {
    const wrapper = mount(<Carousel/>);
    expect(
      wrap.find('button').text()
    ).toEqual('X')
  })
});