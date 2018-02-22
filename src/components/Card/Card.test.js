import React from 'react';
import { Card } from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    const mockHouse = {
      name: "House Corbray of Heart's Home",
      founded: "",
      seats: ["Heart's Home"],
      titles: ["Lord of Heart's Home", "King of the Fingers (historical)"],
      coatOfArms: "Three black ravens in flight,",
      ancestralWeapons: ["Lady Forlorn"],
      words: "",
      swornMembers: [{}]
    }
    wrapper = shallow(<Card { ...mockHouse } />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});