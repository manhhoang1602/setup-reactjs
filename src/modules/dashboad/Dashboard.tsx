import React, { useState } from 'react';
import { Breadcrumb, DatePicker, PageHeader, Table } from 'antd';
import BreadcrumbItem from '../../commons/breadcrumb/BreadcrumbComponent';
import Icon from '../../commons/icon/Icon';
import TableHoc from '../../commons/HOC/TableHOC';
import RangePickerHoc from '../../commons/HOC/RangePickerHOC';
import EditorComponent from '../../commons/editor/EditorComponent';

const Dashboard = () => {
  const [value, setValue] = useState<string>();
  console.log(value);
  return (
    <>
      <PageHeader
        title={'Tổng quan'}
        extra={
          <RangePickerHoc disableDate={'AGO'}>
            <DatePicker.RangePicker />
          </RangePickerHoc>
        }
      >
        <Breadcrumb separator={Icon.ARROW_RIGHT}>
          {BreadcrumbItem.HOME}
          {BreadcrumbItem.DASHBOARD}
        </Breadcrumb>
      </PageHeader>

      <div className={'style-box'}>
        <TableHoc>
          <Table />
          <EditorComponent value={value} onChange={(value) => setValue(value)} />
        </TableHoc>
      </div>
    </>
  );
};

export default Dashboard;
