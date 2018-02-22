import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getHouses, getSwornMembers } from '../../api/apiCall';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })
  })

  it('should match snapshot when houses are NOT loaded', () => {
    wrapper.setState({ loaded: false });

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when houses are loaded', () => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ];
    
    wrapper = shallow(<App addHouses={ jest.fn() } houses={ mockHouses } />, { disableLifecycleMethods: true })
    wrapper.setState({ loaded: true })

    expect(wrapper).toMatchSnapshot();
  });

  it('should map state correctly', () => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ]
    const mockStore = {
      houses: mockHouses
    }
    const expected = mockStore

    expect(mapStateToProps(mockStore)).toEqual(expected);
  });

  it('should call dispatch when an action is called', () => {
    const mockDispatch = jest.fn();

    mapDispatchToProps(mockDispatch).addHouses();

    expect(mockDispatch).toHaveBeenCalled();

  })
});
