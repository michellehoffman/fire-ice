import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getHouses } from '../../api/apiCall';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ];

    wrapper = shallow(<App addHouses={ jest.fn() } houses={ mockHouses }/>, { disableLifecycleMethods: true })
  })

  it('should match snapshot when houses are NOT loaded', () => {
    wrapper.setState({ loaded: false });

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot when houses are loaded', () => {
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

  it.skip('should map dispatch correctly', () => {
    const mockDispatch = jest.fn();
    // const expected = ({
      // addHouses: houses => mockDispatch(addHouses(houses))
    // });

    mapDispatchToProps(mockDispatch);

    expect(mockDispatch).toHaveBeenCalled();

    // expect(mapDispatchToProps(mockDispatch)).toEqual(expected);
  })
});
