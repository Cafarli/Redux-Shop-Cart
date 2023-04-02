import { ACTION_TYPES } from "../actionTypes";
import { combineReducers } from 'redux';

const initialState = {
  products: [{ pId: "", pTitle: "", pPrice: "", pPhoto: "", colored: false }],
};

export function Reducers (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_CART:
      const findProduct = state.products.find(
        (item) => item.pId === action.products.pId
      );
      return (findProduct !== undefined
        ? state
        : {
            ...state,
            products: [...state.products, action.products]
          })
    case ACTION_TYPES.REMOVE_CART:
      // console.log("state", state);
      // console.log("action", action);

      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.pId !== action.products.pId
          ),
        ],
      };

    default:
      return state;
  }
}
export const reducers = combineReducers({
  add: Reducers
});