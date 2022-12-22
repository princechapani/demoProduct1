import {
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_RESPONSE,
} from '../../helper/Types';

const initialState = {
  data: null,
};

export const AddProductReducer = (state = initialState, action) => {
  const prevState = {...state};
  const {type} = action;

  switch (type) {
    case ADD_PRODUCT_REQUEST:
      return {
        ...prevState,
        action: action,
      };
    case ADD_PRODUCT_RESPONSE:
      return {
        ...prevState,
        data: action.payload,
      };
  }
  return prevState;
};
