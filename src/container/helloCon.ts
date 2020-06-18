
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { decrement, increment } from '../actions';
import Hello from '../components/hello';
import { StoreState } from '../assert/interface';


// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: StoreState) => ({
    num: state.num
})

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
    onDecrement: () => dispatch(decrement()),
    onIncrement: () => dispatch(increment())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
