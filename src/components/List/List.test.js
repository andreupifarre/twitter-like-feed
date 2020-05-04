import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

const render = (props) => shallow(<List {...props} />);

describe('List', () => {
  it('should contain an ul element with a role and a class .list__list', () => {
    const element = render().find('.list__list');
    expect(element.exists()).toBeTruthy();
    expect(element.name()).toEqual('ul');
  });

  it('should display a "Loading..." message if results are empty', () => {
    const props = { tweets: [] };
    const element = render(props).find('.list__loading');
    expect(element.exists()).toBeTruthy();
  });

  it('should render list items correctly when tweets array has items', () => {
    const props = {
      tweets: [
        {
          image:
            'https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg',
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
      ],
    };

    const items = render(props).find('Tweet');
    expect(items.length).toEqual(props.tweets.length);

    const newItems = items.map((item) => item.props());
    expect(newItems).toEqual(props.tweets);
  });

  it('should render correctly', () => {
    expect(render().getElements()).toMatchSnapshot();
  });
});
