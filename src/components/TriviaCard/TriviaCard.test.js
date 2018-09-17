import React from 'react';
import { shallow } from 'enzyme';
import TriviaCard from './TriviaCard';

describe('TriviaCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TriviaCard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
