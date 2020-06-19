import * as React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

interface HelloProps {
    value?: string;
    num: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

interface HelloStatus {
    value?: string;
}
export default class Home extends React.Component<HelloProps, HelloStatus> {
    constructor(props: HelloProps) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    public render() {
        const { num, onIncrement, onDecrement } = this.props;
        return <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
            <Link to="/header/">header</Link>
         </Menu.Item>
        <Menu.Item key="app" icon={<AppstoreOutlined />}>
            <Link to="/hello/">hello</Link>
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        </Menu.Item>
    </Menu>
        // return <div className='content'>
        //     <span>Home!!!!!!!!!!!!!!!!</span>
        //     <span>{num}</span>

        //     <p>
        //         <Button type="primary" onClick={onIncrement} style={{ marginRight: 20 }}> +  </Button>
        //         <Button type="primary" onClick={onDecrement}> - </Button>
        //     </p>

        //     <nav>
        //         <ul>
        //             <li>
        //                 <Link to="/header/">header</Link>
        //             </li>
        //             <li>
        //                 <Link to="/hello/">hello</Link>
        //             </li>
        //         </ul>
        //     </nav>
        // </div>
    }
}