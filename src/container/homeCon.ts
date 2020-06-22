
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Home from '../components/home';
import { decrement, increment } from '../actions';
import { IStoreState } from '../assert/interface';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: IStoreState) => ({
    num: state.counter.num,
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Home);
