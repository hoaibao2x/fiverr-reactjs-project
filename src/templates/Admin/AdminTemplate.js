import {
    PieChartOutlined,
    UserOutlined,
    SnippetsOutlined,
    OrderedListOutlined,
    CustomerServiceOutlined,
    CaretDownOutlined,
    LogoutOutlined,
    ExportOutlined,
    InfoCircleOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, Route } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem(<NavLink style={{ fontSize: '22px', fontWeight: 'bold', textDecoration: 'none' }} to='/admin'>Dashboard</NavLink>, '1', <PieChartOutlined />),
    getItem(<NavLink style={{ textDecoration: 'none' }} to='/admin/list-user'>Quản lý người dùng</NavLink>, '2', <UserOutlined />),
    getItem(<NavLink style={{ textDecoration: 'none' }} to='/admin/list-job'>Quản lý công việc</NavLink>, '3', <SnippetsOutlined />),
    getItem(<NavLink style={{ textDecoration: 'none' }} to='/admin/list-job-type'>Quản lý loại công việc</NavLink>, '4', <OrderedListOutlined />),
    getItem(<NavLink style={{ textDecoration: 'none' }} to='/admin/list-service'>Quản lý dịch vụ</NavLink>, '5', <CustomerServiceOutlined />),
];

export const AdminTemplate = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <>
                    <Layout
                        style={{
                            minHeight: '100vh',
                        }}
                    >
                        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                            <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                        </Sider>

                        <Layout className="site-layout">
                            <Header
                                className="site-layout-background"
                                style={{
                                    padding: 0,
                                }}
                            />
                            <Content
                                style={{
                                    margin: '0 16px',
                                }}
                            >

                                <Menu mode="horizontal" style={{ justifyContent: "flex-end", fontWeight: 'bold', verticalAlign: 'center' }}>
                                    <Menu.SubMenu key="SubMenu" title="Xin chào Admin" icon={<CaretDownOutlined />}>
                                        <Menu.Item key="info-admin" icon={<InfoCircleOutlined />}>
                                            Thông tin tài khoản
                                        </Menu.Item>
                                        <Menu.Item key="exit-admin" icon={<ExportOutlined />}>
                                            Thoát trang admin
                                        </Menu.Item>
                                        <Menu.Item key="log-out" icon={<LogoutOutlined />}>
                                            Đăng xuất
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>

                                <props.component {...propsRoute} />
                            </Content>
                        </Layout>
                    </Layout>
                </>
            )
        }} />
    );
};