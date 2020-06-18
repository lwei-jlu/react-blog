import * as React from 'react'
import { Link } from 'react-router-dom';

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
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/hello/">页面二</Link>
                    </li>
                </ul>
            </nav>
        </div>
    }
}