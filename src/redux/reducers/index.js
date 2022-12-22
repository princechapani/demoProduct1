import {combineReducers} from 'redux';
import {GetProductReducer} from './GetProductReducer';
import {AddProductReducer} from './AddProductReducer';
import {loaderReducer} from './LoderReducer';

export default combineReducers({
  GetProduct: GetProductReducer,
  AddProductReducer: AddProductReducer,
  Loader: loaderReducer,
});
