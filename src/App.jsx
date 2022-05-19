import React from "react";
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

export const App = () => {

    return (
        <>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};