import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getHouses } from '../../api/apiCall';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })
  })

  it('should match snapshot when loaded is false', () => {
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

  it('should map dispatch correctly', () => {
    const mockDispatch = jest.fn();
    const expected = ({
      addHouses: houses => mockDispatch(addHouses(houses))
    });

    // mapDispatchToProps(mockDispatch);
    // expect(mockDispatch).toHaveBeenCalled();

    expect(mapDispatchToProps(mockDispatch)).toEqual(expected);
  })
});
