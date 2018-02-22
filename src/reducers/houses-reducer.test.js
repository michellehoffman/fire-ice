import { addHouses } from '../actions/index';
import { housesReducer } from './houses-reducer';

describe('housesReducer', () => {
  it('should return a default state', () => {
    const expected = [];

    expect(housesReducer(undefined, {})).toEqual(expected)
  });

  it('should return an array of houses', () => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ]
    const expected = mockHouses

    expect(housesReducer(undefined, addHouses(mockHouses))).toEqual(expected)
  });
});