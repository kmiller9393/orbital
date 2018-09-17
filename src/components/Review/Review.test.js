import React from 'react';
import { shallow } from 'enzyme';
import Review from './Review';

describe('Review', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Review />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
