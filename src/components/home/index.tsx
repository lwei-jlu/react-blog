import * as React from 'react'
import { List } from '../list';

interface HelloProps {
    value?: string;
    num: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

interface HelloStatus {
    value?: string;
}
export default class Home extends React.Component<HelloProps, HelloStatus> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        const { num, onIncrement, onDecrement } = this.props;
        return <div className='content'>
            <span>hello!!!!!!!!!!!!!!!!</span>
            <span>{num}</span>

            <p>
                <button onClick={onIncrement} style={{ marginRight: 20 }}> +  </button>
                <button onClick={onDecrement}> - </button>
            </p>
            <List val={num} obj={{x: 10}}></List>
        </div>
    }
}