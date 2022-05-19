import React, { useState } from "react";
import { Layout, Row, Col, Slider } from 'antd';
import { MenuOutlined } from "@ant-design/icons";

import Table from "./components/Table/Table";


const { Header, Footer, Content } = Layout;

export const App = () => {

    const [rows, setRows] = useState(20);

    return (
        <div className="container">
            <Layout>
                <Header><MenuOutlined style={{ marginTop:"15px", fontSize: '32px', color: '#08c' }}/></Header>
                <Content>
                    <Row>
                        <Col span={16} offset={4}>
                            <Slider min={10} max={100} onChange={setRows} defaultValue={rows}/>
                            <Table rows={rows}/>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{margin: "0 auto"}}>made with by Ant Design © 2022</Footer>
            </Layout>
        </div>
    );
};
