import * as React from 'react'

interface HelloProps {
    value?: string;
}

interface HelloStatus {
    value?: string;
}
export default class Header extends React.Component<HelloProps, HelloStatus> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        return <div className='content'>
            <span>Header!!!!!!!!!!!!!!!!</span>
            {this.props.value}
        </div>
    }
}