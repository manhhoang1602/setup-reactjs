import React, { Children, cloneElement, useEffect, useRef, useState } from 'react';
import Config from '../../services/Config';

interface IProps {
  bordered?: boolean;
  colorActive?: string;
}

const TableHoc: React.FC<IProps> = ({ bordered, colorActive, children }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[] | number[]>([]);
  const tableRef = useRef<HTMLDivElement>(null);

  const activeRow = (key: string, color: string = colorActive ? colorActive : '#f6f9ff') => {
    if (tableRef.current) {
      let trElement: any = tableRef.current.getElementsByTagName('tr');
      if (trElement && trElement.length >= 0) {
        for (let i = 0; i < trElement.length; i++) {
          if (trElement[i].hasAttribute('data-row-key')) {
            trElement[i].style.background = 'white';
            if (trElement[i].getAttribute('data-row-key') === key) {
              trElement[i].style.background = color;
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    expandedRowKeys.length > 0 && activeRow(expandedRowKeys[0].toString());
  }, [expandedRowKeys]);

  return (
    <div ref={tableRef}>
      {Children.map(children, (child: any) => {
        // console.log(child);
        const props = {
          expandable: {
            ...child.props.expandable,
            expandRowByClick: true,
            onExpand: (expanded: boolean, record: any) => {
              expanded ? setExpandedRowKeys([record.key]) : setExpandedRowKeys([]);
            },
            expandedRowKeys: expandedRowKeys,
          },
          bordered: bordered ? bordered : true,
          scroll: { ...child.props.scroll, x: 700 },
          pagination: {
            ...child.props.pagination,
            showSizeChanger: false,
            pageSize: child.props.pagination?.pageSize ? child.props.pagination.pageSize : Config._limit,
          },
        };
        return cloneElement(child, props);
      })}
    </div>
  );
};

export default TableHoc;
