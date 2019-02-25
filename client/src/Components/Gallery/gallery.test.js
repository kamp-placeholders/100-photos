import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Gallery from './Gallery';

import Adapter from 'enzyme-adapter-react-16';
import dummyData from '../../sampleData.js'

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery component", () => {
  const props = {
    data: dummyData,
    imgTotal: 18
  }
  const wrapper = shallow(<Gallery {...props}/>);
  test("renders and mounts", () => {
      expect(wrapper.exists()).toBe(true);
    })
  test("onClick images open Modal", () => {
    const mockFn = jest.fn();

    const lastImage = shallow(<div
      id="photo8"
      onClick={mockFn}
      >
    </div>)
    lastImage.find('#photo8').simulate('click');
    expect(mockFn).toBeCalled();
  })
  });



