import React from 'react';
import { shallow } from 'enzyme';

import Feed from './Feed';
import useInterval from '../../hooks/useInterval';
import useFetchData from '../../hooks/useFetchData';

jest.mock('../../hooks/useInterval');
jest.mock('../../hooks/useFetchData');

useInterval.mockReturnValue('');
useFetchData.mockReturnValue([]);

const render = () => shallow(<Feed />);

afterEach(() => {
  jest.clearAllMocks();
});

describe('Feed', () => {
  it('should contain an element with a class .feed', () => {
    expect(render().find('.feed').exists()).toBeTruthy();
  });

  it('should contain an H2 element with a class .feed__title', () => {
    const element = render().find('.feed__title');
    expect(element.exists()).toBeTruthy();
    expect(element.name()).toEqual('h2');
  });

  it('should contain a List component', () => {
    const element = render().find('List');
    expect(element.exists()).toBeTruthy();
    expect(element.prop('tweets')).toBeDefined();
  });

  it('should pass the correct object to List tweets property', () => {
    const tweets = [
      {
        image: 'https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg',
        text:
          '10001. "It is straight enough. I should like to know who sold you the\ngeese which you supplied to the Alpha."',
        username: 'Ferne.Dickinson1',
      },
      {
        image:
          'https://s3.amazonaws.com/uifaces/faces/twitter/kazaky999/128.jpg',
        text:
          '10000. Godfrey\nNorton, as our client is to its coming to the eyes of his\nprincess.',
        username: 'Jena_Heller',
      },
    ];

    useInterval.mockReturnValue(0);
    useFetchData.mockReturnValue(tweets);

    expect(render().find('List').prop('tweets')).toEqual(tweets);
  });

  it('should render correctly', () => {
    expect(render().getElements()).toMatchSnapshot();
  });
});
