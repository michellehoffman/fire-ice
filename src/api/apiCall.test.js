import { getHouses, getSwornMembers } from './apiCall';

describe.skip('getHouses', () => {
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
      json: () => Promise.resolve(mockHouses)
    }));

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

describe('getSwornMembers', () => {
  beforeEach(() => {
    const members = [{ name: 'Member1' }]

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(members)
    }));
  });

  it('should call fetch with the right params', () => {
    const array = [{ swornMembers: 'url' }]
    const expected = 'url';

    getSwornMembers();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return the array of houses with members', () => {
    const mockHouses = [
      { name: "House Corbray of Heart's Home" },
      { name: "House Dayne of Starfall" }
    ]
    const expected = [
      { name: "House Corbray of Heart's Home", swornMembers: 'Member1' },
      { name: "House Dayne of Starfall", swornMembers: 'Member1' }
    ]

    expect(getSwornMembers(mockHouses)).resolves.toEqual(expected);
  });

  it('should throw an error if fetch fails', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolves({
      status: 500
    }))

    expect(getSwornMembers()).rejects.toEqual(Error)
  });
});