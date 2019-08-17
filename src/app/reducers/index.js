import { combineReducers } from 'redux';
import listReducer from './list-reducer';
import cartreducer from './cart-reducer';

const allReducers = combineReducers({ 
	prodList: listReducer,
	cartDetail: cartreducer
});

export default allReducers;