import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Gallery from '../client/src/Components/Gallery/Gallery';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery component", () => {
  const wrapper = mount(<Gallery/>);
  test("renders", () => {
      expect(wrapper.exists()).toBe(true);
    })
  });