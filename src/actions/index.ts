import { INCREMENT, DECREMENT, REQUEST_POSTS, RECEIVE_POSTS } from "../constants";
import { Dispatch } from "redux";
import axios from 'axios';

export interface IINCREMENTAction {
    type: INCREMENT;
}
 
export interface IDECREMENTAction {
    type: DECREMENT;
}
 
export interface REQUEST_POSTSAction {
    type: REQUEST_POSTS;
}

export interface RECEIVE_POSTSAction {
    type: RECEIVE_POSTS;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;

export type FetchAPIAction = REQUEST_POSTSAction | RECEIVE_POSTSAction;
 
 
// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
    type: INCREMENT,
})
 
// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
    type: DECREMENT
})

export const requestPosts = (typeStr: string) => ({
    type: REQUEST_POSTS,
    typeStr,
})

export const receivePosts = (typeStr: Object) => ({
    type: REQUEST_POSTS,
    typeStr,
    receivedAt: Date.now(),
})

export const fetchPosts = (typeStr?: string) => (dispatch: Dispatch) => {
    dispatch(requestPosts('loading'));
    axios.get('http://v.juhe.cn/toutiao/index', {
        params: {
          key: 'a238f80e857820fb5ef60242b4897a5d',
          type: typeStr,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
      })
      .then(data => {
          dispatch(receivePosts(data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
