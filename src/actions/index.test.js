import { addHouses } from './index';

describe('addHouses', () => {
  it('should return an object with a type of ADD_HOUSES and an array of houses', () => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ]

    const expected = {
      type: 'ADD_HOUSES',
      houses: mockHouses
    }

    expect(addHouses(mockHouses)).toEqual(expected)
  });
});