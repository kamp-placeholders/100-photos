import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Gallery from '../client/src/Components/Gallery/Gallery';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery component", () => {
  test("renders", () => {
    const wrapper = shallow(<Gallery/>);
    expect(wrapper.exists()).toBe(true);
  })
  test("match snapshot", () => {
    const wrapper = mount(<Gallery/>);
    expect(wrapper).toMatchSnapshot()
  })
});