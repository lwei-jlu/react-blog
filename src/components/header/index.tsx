import * as React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import './style.scss'

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
        return <div className='header'>
            <Menu mode="horizontal" style={{ background: '#f0f2f5', color: 'rgba(0, 0, 0, 0.65)' }}>
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    <Link to="/hello">hello</Link>
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    <Link to="/about">about</Link>
                </Menu.Item>
                <Menu.Item key="alipay" icon={<HomeOutlined />}>
                    <Link to="/home">Home</Link>
                </Menu.Item>
            </Menu>
        </div>
    }
}