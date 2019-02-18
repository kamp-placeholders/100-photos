import React from 'react';
import Enzyme, {shallow, mount} from 'enzyme';
import App from '../client/src/Components/App/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  test("renders", () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  })
  test("mounts", () => {
      const wrapper = mount(<App/>);
      expect(wrapper.exists()).toBe(true);
  });
  it("works", () => {
    const wrapper = mount(<App />)
    expect(wrapper).toMatchSnapshot()
  })
  test("data in state present after mounting", () => {
    const wrapper = mount(<App />)
    expect(wrapper.state('data')).toBeTruthy();
    expect(wrapper.state('numOfImages')).toBeGreaterThanOrEqual(0)
  })
});

