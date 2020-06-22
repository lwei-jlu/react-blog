import * as React from 'react'
import { fetchPosts } from '../../actions';
interface AboutProps {
    isFetching: boolean;
    data?: any;
}

interface AboutState {
    isFetching: boolean;
    data?: any;
}

export default class About extends React.Component<any, AboutState> {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
        const { fetchPost } = this.props;
        fetchPost('keji');
    }

    public render() {
        const { isFetching, data } = this.props;
        console.log(data);
        return <div className='about'>
            about!!!!!!!!!!!!!
            <span>{isFetching}</span>
        </div>
    }
}