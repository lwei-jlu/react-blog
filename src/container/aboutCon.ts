
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';
import { IStoreState } from '../assert/interface';
import About from '../components/about';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: IStoreState) => ({
    isFetching: state.fetchapi.isFetching,
    data: state.fetchapi.data,
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: any) => ({
    fetchPost: (str: string) => dispatch(fetchPosts(str)),
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(About);
