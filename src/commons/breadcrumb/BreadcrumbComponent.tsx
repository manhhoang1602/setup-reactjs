import { Breadcrumb } from 'antd';
import Icon from '../icon/Icon';
import history from '../../services/history';
import { ADMIN_ROUTER } from '../../router/AdminRouter';

const BreadcrumbItem = {
  HOME: <Breadcrumb.Item href={'#'}>{Icon.HOME}</Breadcrumb.Item>,
  DASHBOARD: (
    <Breadcrumb.Item>
      <span onClick={() => history.push(ADMIN_ROUTER.DASHBOARD.path)}>Tổng quan</span>
    </Breadcrumb.Item>
  ),
};

export default BreadcrumbItem;
