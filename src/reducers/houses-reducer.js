export const housesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOUSES':
      return action.houses
  default:
    return state;
  }
};
