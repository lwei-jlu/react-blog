// 定义增加 state 类型常量
export const INCREMENT = 'INCREMENT';
export type INCREMENT = typeof INCREMENT;
 
// 定义减少 state 类型常量
export const DECREMENT = 'DECREMENT';
export type DECREMENT = typeof DECREMENT;

export const REQUEST_POSTS = 'REQUEST_POSTS'
export type REQUEST_POSTS = typeof REQUEST_POSTS;

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export type RECEIVE_POSTS = typeof RECEIVE_POSTS;