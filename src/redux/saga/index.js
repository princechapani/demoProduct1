import {takeEvery, all, take} from 'redux-saga/effects';
import {ADD_PRODUCT_REQUEST, GET_PRODUCT_REQUEST} from '../../helper/Types';
import {getProductSaga} from './GetProductSaga';
import {addProductSaga} from './AddProductSaga';

export default function* root_saga() {
  yield all([
    takeEvery(GET_PRODUCT_REQUEST, getProductSaga),
    takeEvery(ADD_PRODUCT_REQUEST, addProductSaga),
  ]);
}
