import * as React from 'react'
import './style.scss';
interface HelloProps {
    value?: string;
}

interface HelloStatus {
    value?: string;
}
export default class Hello extends React.Component<HelloProps, HelloStatus> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        return <div className='content'>
            <span>Succ!!!!!!!!!!!!!!!!</span>
            {this.props.value}
        </div>
    }
}