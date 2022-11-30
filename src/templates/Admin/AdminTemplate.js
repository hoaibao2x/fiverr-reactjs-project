import {
    PieChartOutlined,
    UserOutlined,
    SnippetsOutlined,
    OrderedListOutlined,
    CaretDownOutlined,
    LogoutOutlined,
    ExportOutlined,
    InfoCircleOutlined,
    ApartmentOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { NavLink, Route } from "react-router-dom";
import { history } from '../../App';

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
    getItem(<NavLink style={{ textDecoration: 'none' }} to='/admin/list-user'>Q.L người dùng</NavLink>, '2', <UserOutlined />),
    getItem(<NavLink style={{ textDecoration: 'none' }} to='/admin/list-job'>Q.L công việc</NavLink>, '3', <SnippetsOutlined />),
    getItem('Q.L loại công việc', '4', <OrderedListOutlined />, [
        getItem(<NavLink to='/admin/list-job-type' style={{ textDecoration: 'none' }}>Loại công việc</NavLink>, '5'),
        getItem(<NavLink to='/admin/list-detail-job-type' style={{ textDecoration: 'none' }}>Chi tiết loại công việc</NavLink>, '6')
    ]),
    getItem('Q.L dịch vụ', '7', < ApartmentOutlined />, [
        getItem(<NavLink to='/admin/list-rent-job' style={{ textDecoration: 'none' }}>Thuê công việc</NavLink>, '8'),
        getItem(<NavLink to='/admin/list-comment' style={{ textDecoration: 'none' }}>Bình luận</NavLink>, '9')
    ])
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
                                        <Menu.Item key="exit-admin" onClick={() => {
                                            history.push('/')
                                        }} icon={<ExportOutlined />}>
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