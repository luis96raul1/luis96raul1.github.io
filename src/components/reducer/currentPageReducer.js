export const currentPageReducer = (state, action) => {

  switch (action.type) {
    case 'set':
      return action.payload;
    case 'next':
      return action.payload === state ? 1 : state + 1;
    case 'previous':
      return state === 1 ? action.payload : state - 1;
    default:
      return state;
  }

}