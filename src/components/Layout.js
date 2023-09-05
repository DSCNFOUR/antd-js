import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined, AppstoreAddOutlined } from '@ant-design/icons';

const {Header, Content, Footer} = Layout;

const menuItems = [
    { key: "home", icon: <HomeOutlined />, label: "Home" },
    { key: "info", icon: <AppstoreAddOutlined />, label: "Info" },
  ];
  
const CustomLayout = ({children}) => {
    const handleMenuClick = (e) => {
        switch(e.key) {
            case 'home':
                window.location.href='/';
                break;
            case 'info':
                window.location.href = '/info';
                break;
            default:
                break;
        }
    };
    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Menu theme="dark" mode="horizontal" onClick={handleMenuClick} items={menuItems} />
            </Header>
            
            <Content style = {{padding: '0 50px'}}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>Shimin Design ©2023 Powered by React & Ant Design</Footer>
        </Layout>
    )
};

export default CustomLayout;