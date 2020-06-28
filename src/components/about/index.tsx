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

    private getData = (data: any[]) => {
        const re = [] as JSX.Element[];
        data.forEach(item => {
            return re.push(<div>
                <div>{item.title}</div>
                <a href={item.url}>{item.url}</a>
                <img src={item.thumbnail_pic_s} alt=""/>
            </div>);
        })
        return re;
    }

    public render() {
        const { isFetching, data } = this.props;
        const arr = (data && data.result && data.result.data) ? (data.result.data as any []) : [];
        const dataJSX = this.getData(arr);
        return <div className='about'>
            about!!!!!!!!!!!!!
            <span>{isFetching ? 'true' : 'false'}</span>
            {dataJSX}
        </div>
    }
}