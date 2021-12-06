import React, { useState } from 'react';
import { Layout, Popover } from 'antd';
import Icon from '../../commons/icon/Icon';

const { Header } = Layout;

interface IHeaderComponent {
  toggle: () => any;
}

export const HeaderComponent: React.FC<IHeaderComponent> = ({ toggle }) => {
  return (
    <Header className="site-layout-background">
      <div className={'wrapper-content-header'}>
        <BrandComponent />
        <OptionTopComponent onToggle={() => toggle()} />
      </div>
    </Header>
  );
};

const BrandComponent: React.FC = () => {
  return <div className={'brand-component'}>Hoang DEV</div>;
};

const OptionTopComponent: React.FC<{ onToggle: () => any }> = ({ onToggle }) => {
  const [popoverVisible, setPopoverVisible] = useState({
    account: false,
  });
  const RenderPopoverAccount = (): React.ReactNode => {
    return (
      <Popover
        placement={'bottom'}
        trigger={'click'}
        visible={popoverVisible.account}
        onVisibleChange={() => setPopoverVisible({ ...popoverVisible, account: !popoverVisible.account })}
        content={
          <div
            className={'content-list-account'}
            onClick={() => setPopoverVisible({ ...popoverVisible, account: false })}
          >
            <div className={'item'}>Thông tin tài khoản</div>
            <div className={'item'}>Đăng xuất</div>
          </div>
        }
      >
        <span>{Icon.HEADER_ICON.USER}</span>
      </Popover>
    );
  };
  return (
    <div className={'option-top-component'}>
      <div onClick={() => onToggle()}>{Icon.COLLAPSED_MENU}</div>
      <div className={'wrapper-icon-header'}>
        <span className={'mr-16'}>{Icon.HEADER_ICON.NOTIFICATION}</span>
        {RenderPopoverAccount()}
      </div>
    </div>
  );
};
