import * as React from 'react'
import { LoadingComponentProps } from 'react-loadable'
import './style.scss'
import { RouteComponentProps } from 'react-router-dom';

interface HelloStatus {
    value?: string;
}

interface ArticlesProps  extends LoadingComponentProps, RouteComponentProps{

}

export default class Articles extends React.Component<ArticlesProps, HelloStatus> {
    constructor(props: ArticlesProps) {
        super(props);
        this.state = {
        };
    }

    public componentDidMount() {
        console.log(this.props);
    }

    public render() {
        return <div className='articles'>
            some content
        </div>
    }
}