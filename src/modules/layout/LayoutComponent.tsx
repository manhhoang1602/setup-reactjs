import React, { useState } from 'react';
import { Layout } from 'antd';
import { HeaderComponent } from './HeaderComponent';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer } from 'antd/es/layout/layout';
import MenuComponent, { dataMenuAdmin } from './MenuComponent';
import AdminRouter from '../../router/AdminRouter';

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const getRouter = () => {
    return <AdminRouter />;
  };

  const getMenu = () => {
    return <MenuComponent data={dataMenuAdmin} />;
  };

  return (
    <div className={'layout'}>
      <Layout>
        <HeaderComponent toggle={() => setCollapsed(!collapsed)} />
        <Sider trigger={null} theme={'light'} collapsible collapsed={collapsed} style={{ marginTop: 69 }}>
          {getMenu()}
        </Sider>

        <Layout className="layout__site-layout">
          <Content className="layout__site-layout__site-layout-background">
            <div style={{ minHeight: 'calc(100vh - 150px)' }}>{getRouter()}</div>
            <Footer style={{ textAlign: 'center' }}>Hoang TM ©2021 </Footer>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutComponent;
