
import { FetchAPIAction } from '../actions';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants';
import { fetchAPIState } from '../assert/interface';


 
 
// 处理并返回 state 
export default (state: fetchAPIState = {data: {}, isFetching: false}, action: FetchAPIAction): fetchAPIState => {
    switch (action.type) {
      case REQUEST_POSTS:
        return {...state, isFetching: true};
      case RECEIVE_POSTS:
        return {...state, isFetching: false, data: action.data};
      default:
        return state;
    }
}
