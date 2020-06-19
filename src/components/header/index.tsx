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
export default class Header extends React.Component<HelloProps, HelloStatus> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        return <div className='header'>
            <Menu mode="horizontal">
                <Menu.Item key="mail" icon={<MailOutlined />}>
                    <Link to="/hello">hello</Link>
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreOutlined />}>
                    <Link to="/about">about</Link>
                </Menu.Item>
                <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
        </div>
    }
}