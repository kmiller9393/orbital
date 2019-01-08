import React from 'react';
import { shallow } from 'enzyme';
import Trivia from './Trivia';

describe('Trivia', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Trivia />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
