import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import Gallery from '../client/src/Components/Gallery/Gallery';
import Adapter from 'enzyme-adapter-react-16';
import dummyData from '../client/src/sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe("Gallery component", () => {
  const wrapperMount = mount(<Gallery/>);
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