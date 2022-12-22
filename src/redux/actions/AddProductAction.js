import {ADD_PRODUCT_REQUEST, ADD_PRODUCT_RESPONSE} from '../../helper/Types';

export function AddProductResponse(data) {
  return {
    type: ADD_PRODUCT_RESPONSE,
    payload: data,
  };
}

export function AddProductRequest(bodyData, navigation) {
  return {
    type: ADD_PRODUCT_REQUEST,
    bodyData: bodyData,
    navigation: navigation,
  };
}
