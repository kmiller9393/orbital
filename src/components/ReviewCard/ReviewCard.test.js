import React from 'react';
import { shallow } from 'enzyme';
import ReviewCard from './ReviewCard';

describe('ReviewCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ReviewCard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should change the toggle property within state on click', () => {
    expect(wrapper.state('toggle')).toEqual(false);
    wrapper.find('div').simulate('click');
    expect(wrapper.state('toggle')).toEqual(true);
  });
});
