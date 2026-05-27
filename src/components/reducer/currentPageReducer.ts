export type CarouselAction =
  | { type: 'set'; payload: number }
  | { type: 'next'; payload: number }
  | { type: 'previous'; payload: number };

export const currentPageReducer = (state: number, action: CarouselAction): number => {
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
