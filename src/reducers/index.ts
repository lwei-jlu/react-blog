
import { ModifyAction } from '../actions';
import { INCREMENT, DECREMENT } from '../constants';
import { StoreState } from '../assert/interface';
 
 
// 处理并返回 state 
export default (state = {num: 0}, action: ModifyAction): StoreState => {
    switch (action.type) {
      case INCREMENT:
        return {...state, num: state.num + 1}
      case DECREMENT:
        return {...state, num: state.num - 1}
      default:
        return state
    }
}
