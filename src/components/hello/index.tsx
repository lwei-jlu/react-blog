import * as React from 'react'
import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IStoreState } from '../../assert/interface';
import { decrement, increment } from '../../actions';
interface HelloProps {
    value?: string;
    num: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

interface HelloStatus {
    value?: string;
}
// export default class Hello extends React.Component<HelloProps, HelloStatus> {
//     constructor(props: HelloProps) {
//         super(props);
//         this.state = {
//             value: props.value,
//         };
//     }

//     public render() {
//         const { num, onIncrement, onDecrement } = this.props;
//         return <div className='content'>
//             <span>hello!!!!!!!!!!!!!!!!</span>
//             <span>{num}</span>

//             <p>
//                 <button onClick={onIncrement} style={{ marginRight: 20 }}> +  </button>
//                 <button onClick={onDecrement}> - </button>
//             </p>
//         </div>
//     }
// }

//  使用hooks函数声明组件
export const Hello: React.FC = () => {
    const status = useSelector((state: IStoreState) => state.counter);
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increment());
    };
    const onDecrement = () => {
        dispatch(decrement());
    };
    return <div className='content'>
        <span>hello!!!!!!!!!!!!!!!!</span>
        <span>{status.num}</span>

        <p>
            <button onClick={onIncrement} style={{ marginRight: 20 }}> +  </button>
            <button onClick={onDecrement}> - </button>
        </p>
    </div>
};