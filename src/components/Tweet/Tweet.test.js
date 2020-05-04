import React from 'react';
import { shallow } from 'enzyme';
import Tweet from './Tweet';

const render = (props) => shallow(<Tweet {...props} />);

describe('Tweet', () => {
  it('should contain an element with a class .item', () => {
    const element = render().find('.item');
    expect(element.exists()).toBeTruthy();
  });

  it('should render correctly', () => {
    expect(render().getElements()).toMatchSnapshot();
  });
});
