import {GET_PRODUCT_REQUEST, GET_PRODUCT_RESPONSE} from '../../helper/Types';

const initialState = {
  data: null,
};

export const GetProductReducer = (state = initialState, action) => {
  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case GET_PRODUCT_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case GET_PRODUCT_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
