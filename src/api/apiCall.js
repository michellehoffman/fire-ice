export const getHouses = async() => {
  console.log('WHY THO')
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    const results = await response.json();
    const complete = await getSwornMembers(results);

    return complete;
  } catch(error) {
    throw Error
  }
}

export const getSwornMembers = async (array) => {
  try {
    return Promise.all(array.map( async (house) => {
      const members = await Promise.all(house.swornMembers.map( async (member) => {
        const response = await fetch(member);
        const results = await response.json();
        
        return results;
      }))
    house.swornMembers = members

    return house;
  }))
  } catch(error) {
    throw Error
  }
}