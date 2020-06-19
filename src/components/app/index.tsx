import React from 'react';
import Header from '../header';
import './style.scss';
import Footer from '../footer';
import { BackTop, Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import ContentMain from '../ContentMain';
const { Content } = Layout;

export default class App extends React.Component {
    render() {
        return (
            <div className="App" >
                <BrowserRouter>
                    <Layout>
                        <BackTop />
                        <Header />
                        <Layout>
                            <Content style={{background: '#FFF'}} >
                                <ContentMain/>
                            </Content>
                        </Layout>
                        <Footer/>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}