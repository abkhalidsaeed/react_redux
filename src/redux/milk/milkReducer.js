import { BUY_MILK } from './milkType';

const initialState = {
  numOfMilk: 30,
};

const milkReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...state,
        numOfMilk: state.milk.numOfMilk - 1,
      };
    default:
      return state;
  }
};

export default milkReducer;
