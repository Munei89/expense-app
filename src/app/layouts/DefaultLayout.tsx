import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  LineChartOutlined,
} from '@ant-design/icons';
import styles from './default-layout.module.scss';
import cx from 'classnames';
import Logo from 'assets/images/logo.png';
import LogoMobile from 'assets/images/logo-mobile.png';

const { Header, Sider, Content } = Layout;

const DeafultLayout = props => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className={cx(styles['layout-default'])}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className={cx(styles['side-menu'])}
      >
        <div className={cx(styles['logo'])}>
          <img src={collapsed ? LogoMobile : Logo} alt="logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<LineChartOutlined />}>
            Grapghs
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DeafultLayout;
