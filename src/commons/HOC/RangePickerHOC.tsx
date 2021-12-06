import React, { Children, cloneElement } from 'react';
import moment from 'moment';

interface IProps {
  format?: string | 'DD-MM-YYYY';
  disableDate?: 'FEATURE' | 'AGO';
}

const RangePickerHoc: React.FC<IProps> = ({ children, format, disableDate }) => {
  const getDisableDate = (current: any) => {
    if (disableDate === 'FEATURE') {
      return current && current >= moment().endOf('date');
    }
    if (disableDate === 'AGO') {
      return current && current < moment().startOf('date');
    }
    return undefined;
  };
  return (
    <>
      {Children.map(children, (child: any) => {
        console.log(child);
        const props = {
          disabledDate: (current: any) => getDisableDate(current),
          suffixIcon: <i className="fal fa-calendar-alt" />,
        };
        return cloneElement(child, props);
      })}
    </>
  );
};

export default RangePickerHoc;
