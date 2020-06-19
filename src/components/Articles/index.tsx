import * as React from 'react'
import { LoadingComponentProps } from 'react-loadable'
import './style.scss'

interface HelloStatus {
    value?: string;
}
export default class Articles extends React.Component<LoadingComponentProps, HelloStatus> {
    constructor(props: LoadingComponentProps) {
        super(props);
        this.state = {
        };
    }

    public render() {
        return <div className='articles'>
            some content
        </div>
    }
}