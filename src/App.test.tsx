import React from 'react';
import App from './App';
import {shallow} from 'enzyme';

describe('App', () => {

  it('should render',() => {
    const app = shallow(<App />);

    expect(app).toBeDefined();
  });
});
