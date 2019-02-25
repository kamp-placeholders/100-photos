import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import App from './App.jsx';
import {PhotoGallery, Header} from './AppStyles.js';
import Adapter from 'enzyme-adapter-react-16';
import dummyData from '../../sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  const wrapper = shallow(<App/>);
  test("renders", () => {
    expect(wrapper.exists()).toBe(true);
  })
  it("snapshot test", () => {
    expect(wrapper).toMatchSnapshot()
  })
  test("data in state present after mounting", () => {
    wrapper.setState({ data: dummyData })
    expect(wrapper.state('data')).toBeTruthy();
  })
});