import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

/////////////////////////////////////////////////////////////// 
///////////////////// 		COMBINA LOS REDUCERS
/////////////////////////////////////////////////////////////// 
const reducer = (state, action=[])=>{
	if(action.type==='GET_GITS') {
		return{
			...state,
		 	gits:action.gits,
		}
	}
	if(action.type==='GET_GITS_DETAIL') {
		return{
			...state,
		 	git:action.git,
		}
	}
 
	return state
}

const logger = store => next => action => {
  let result = next(action)
  return result
}
 
export default createStore(reducer,[], applyMiddleware(logger, thunk))








