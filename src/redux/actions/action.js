// import { addCartAction } from "./addCartAction";
// import { removeCartAction } from "./removeCartAction";

// export {addCartAction, removeCartAction};
import { ACTION_TYPES } from "../actionTypes";

export const addCartAction = (id, title, price, photo, colored) => {
  return {
    type: ACTION_TYPES.ADD_CART,
    products: { pId: id, pTitle: title, pPrice: price, pPhoto: photo, pColored: colored }
  };
};
export const removeCartAction = (id) => {
    return {
      type: ACTION_TYPES.REMOVE_CART,
      products: { pId: id }
    };
  };
  