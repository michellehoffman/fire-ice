import { getHouses, getSwornMembers } from './apiCall';

describe('get', () => {
  beforeEach(() => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home",
        swornMembers: ["one", "two"]
      },
      { name: "House Dayne of Starfall",
        swornMembers: ["one", "two"]
      }
    ]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve()
    }));

    getHouses => getSwornMembers()
    getSwornMembers => (mockHouses)
  });

  it('should call fetch with the correct params', () => {
    const expected = 'http://localhost:3001/api/v1/houses';

    getHouses()

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an array of houses', () => {
    const expected = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ]

    expect(getHouses()).resolves.toEqual(expected);
  });

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 500
    }))

    expect(getHouses()).rejects.toEqual(Error);
  })
});