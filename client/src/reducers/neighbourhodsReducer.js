import { FETCH_NEIGHBOURHOODS, FETCH_NEIGHBOURHOOD } from "../actions/types";

const key = "key";

// export default (state = {}, action) => {
//   if (action.type === FETCH_NEIGHBOURHOODS) {
//     return { ...state, [key]: action.payload };
//   }
//   return state;
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NEIGHBOURHOODS:
      return { ...state, [key]: action.payload };
    case FETCH_NEIGHBOURHOOD:
      return { ...state, [key]: action.payload };
    default:
      return state;
  }
};
