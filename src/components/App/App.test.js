import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getHouses } from '../../api/apiCall';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
});
