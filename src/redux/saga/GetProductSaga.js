import {put} from 'redux-saga/effects';
import {BaseURL, Url, GET} from '../../helper/APiConfig';
import {GetProductResponse} from '../actions/GetProductAction';
import {LoaderAction} from '../actions/LoaderAction';

export function* getProductSaga() {
  try {
    const getproduct = yield fetch(BaseURL + Url.Product, {
      method: GET,
    });
    const respose = yield getproduct.json();
    if(getproduct.status == 200){
      yield put(GetProductResponse(respose));
    }
    yield put(LoaderAction(false));
  } catch (e) {
    console.log('Get Product Saga Catch Part ::', e);
  }
}
