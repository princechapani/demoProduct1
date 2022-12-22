import {put} from 'redux-saga/effects';
import {BaseURL, Url, GET} from '../../helper/APiConfig';
import { NavConstants } from '../../helper/NavigationConstants';
import {GetProductResponse} from '../actions/GetProductAction';
import {LoaderAction} from '../actions/LoaderAction';

export function* addProductSaga(action) {

  const {bodyData, navigation} = action;

  try {
    const AddProduct = yield fetch(BaseURL + Url.Product, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': '<calculated when request is sent>',
      },
      body: JSON.stringify(bodyData),
    });
    if (AddProduct.status === 200) {
      yield put(GetProductResponse(null));
      yield put(LoaderAction(false));
      navigation.navigate(NavConstants.Home);
    }
  } catch (e) {
    console.log('Add product Saga Catch Part ::', e);
  }
}
