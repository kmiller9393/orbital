import React from 'react';
import { shallow } from 'enzyme';
import { ReviewContainer, mapStateToProps } from './ReviewContainer';
import { createMemoryHistory } from 'history';

describe('ReviewContainer', () => {
  let wrapper;
  let mockGlossary;
  let mockAddReview;
  let mockEventNext;
  let mockEventPrevious;
  let mockEvent;
  let mockHistory1;
  let mockReviewItems;
  let mockHistory2;
  let mockHistory3;
  let mockHistory4;
  let mockHistory5;

  beforeEach(() => {
    mockHistory1 = {
      location: {
        pathname: '/review-one'
      },
      replace: () => jest.fn()
    };

    mockHistory2 = {
      location: {
        pathname: '/review-two',
        replace: () => jest.fn()
      }
    };

    mockHistory3 = {
      location: {
        pathname: '/review-three',
        replace: () => jest.fn()
      }
    };

    mockHistory4 = {
      location: {
        pathname: '/review-four',
        replace: () => jest.fn()
      }
    };

    mockHistory5 = {
      location: {
        pathname: '/review-five',
        replace: () => jest.fn()
      }
    };

    mockEventNext = {
      target: {
        innerText: 'Asteroid',
        name: 'next'
      }
    };

    mockReviewItems = [
      {
        name: 'Asteroid',
        definition:
          'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter.',
        id: 0
      },
      {
        name: 'Black Hole',
        definition:
          'A region of space containing a huge amount of mass compacted into an extremely small volume.',
        id: 1
      }
    ];

    mockEventPrevious = {
      target: {
        innerText: 'Asteroid',
        name: 'previous'
      }
    };

    mockEvent = {
      target: {
        innerText: 'Asteroid'
      }
    };

    mockGlossary = [
      {
        name: 'Asteroid',
        definition:
          'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter. Their sizes range anywhere from 33 feet (10 meters) in diameter to less than 620 miles (1,000 kilometers). The largest known asteroid, Ceres, has a diameter of 579 miles (926 kilometers).',
        id: 0
      }
    ];

    mockAddReview = jest.fn();
  });

  describe('ReviewContainer component', () => {
    it('should match the snapshot', () => {
      wrapper = shallow(
        <ReviewContainer history={mockHistory1} glossary={mockGlossary} />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should call navigateCard when the next button is clicked', () => {
      wrapper = shallow(
        <ReviewContainer glossary={mockGlossary} history={mockHistory1} />
      );
      const spy = jest.spyOn(wrapper.instance(), 'navigateCard');
      wrapper.instance().forceUpdate();

      wrapper.find('[name="next"]').simulate('click', mockEvent);
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });

    it('should increment the page by one when the next button is clicked', () => {
      wrapper = shallow(
        <ReviewContainer glossary={mockGlossary} history={mockHistory1} />
      );

      expect(wrapper.state('page')).toEqual(0);
      wrapper.setState({ reviewItems: [123, 123] });
      wrapper.instance().navigateCard(mockEventNext);
      expect(wrapper.state('page')).toEqual(1);
    });

    it('should decrement the page by one when the next button is clicked', () => {
      wrapper = shallow(
        <ReviewContainer glossary={mockGlossary} history={mockHistory1} />
      );

      wrapper.setState({ page: 1 });
      expect(wrapper.state('page')).toEqual(1);
      wrapper.setState({
        reviewItems: [...mockReviewItems]
      });
      wrapper.instance().navigateCard(mockEventPrevious);
      expect(wrapper.state('page')).toEqual(0);
    });

    it('should call navigateCard when the previous button is clicked', () => {
      wrapper = shallow(
        <ReviewContainer glossary={mockGlossary} history={mockHistory1} />
      );
      const spy = jest.spyOn(wrapper.instance(), 'navigateCard');
      wrapper.instance().forceUpdate();

      wrapper.find('[name="previous"]').simulate('click', mockEvent);
      expect(spy).toHaveBeenCalledWith(mockEvent);
    });
  });

  describe('mapStateToProps', () => {
    it('should return an array of glossary objects', () => {
      const glossary = {
        name: 'Asteroid',
        definition:
          'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter. Their sizes range anywhere from 33 feet (10 meters) in diameter to less than 620 miles (1,000 kilometers). The largest known asteroid, Ceres, has a diameter of 579 miles (926 kilometers).',
        id: 0
      };

      const mockState = {
        glossary
      };
      const expected = {
        glossary: {
          name: 'Asteroid',
          definition:
            'A small solar system object composed mostly of rock. Many of these objects orbit the Sun between Mars and Jupiter. Their sizes range anywhere from 33 feet (10 meters) in diameter to less than 620 miles (1,000 kilometers). The largest known asteroid, Ceres, has a diameter of 579 miles (926 kilometers).',
          id: 0
        }
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});
