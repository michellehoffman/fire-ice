export const getHouses = async() => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/houses');
    const results = await response.json();
    debugger;

    return results;
  } catch(error) {
    throw Error
  }
}