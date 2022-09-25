import { BUY_CAKE } from "./cakeTypes";

// action creater
const buyCake = (number = 1) => {
  return {
    // action
    type: BUY_CAKE,
    payload: number,
  };
};
export default buyCake;
