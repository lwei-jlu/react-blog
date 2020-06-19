import React from 'react';
import Header from '../header';
import './style.scss';
import Footer from '../footer';
import { BackTop, Col, Layout, Row } from 'antd';
const { Content } = Layout;

export default class App extends React.Component {
    render() {
        return (<Layout>
            <BackTop />
            <Header/>
            <Layout>
              <Content>
                <Row>
                  <Col xs={1} sm={1} md={1} lg={1} xl={3} xxl={5} />
                  <Col xs={22} sm={22} md={22} lg={20} xl={18} xxl={14}>
                    <Row>
                      <Col xs={24} sm={24} md={24} lg={17} xl={17} xxl={17}>
                        {'ttttttttttttttttttttttttttttttttttttt'}
                      </Col>
                      <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={{ span: 6, offset: 1 }}
                        xl={{ span: 6, offset: 1 }}
                        xxl={{ span: 6, offset: 1 }}>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Content>
            </Layout>
            <Footer />
          </Layout>);
    }
}