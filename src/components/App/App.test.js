import React from 'react';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { getHouses, getSwornMembers } from '../../api/apiCall';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    const mockHouses = [{
      name: '',
      founded: '',
      seats: [''],
      titles: [''],
      coatOfArms: '',
      ancestralWeapons: [''],
      words: '',
      swornMembers: [{}]
    }]

    wrapper = shallow(<App addHouses={ jest.fn() }
                           houses={ mockHouses } />, { disableLifecycleMethods: true })
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
    const mockHouses = [{
      name: '',
      founded: '',
      seats: [''],
      titles: [''],
      coatOfArms: '',
      ancestralWeapons: [''],
      words: '',
      swornMembers: [{}]
    }]
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
  });
  
});
