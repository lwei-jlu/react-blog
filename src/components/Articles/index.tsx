import * as React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

interface HelloProps {
    value?: string;
}

interface HelloStatus {
    value?: string;
}
export default class Articles extends React.Component<HelloProps, HelloStatus> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        return <div className='articles'>
            some content
        </div>
    }
}