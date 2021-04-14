import React from 'react';

import { Button, ButtonProps, ConfigProvider } from 'antd';

import './index.less';

export interface IBaseCustomButtonProps {}

type TCustomButtonProps = IBaseCustomButtonProps & ButtonProps;

const CustomButton = (props: TCustomButtonProps) => {
  const { children, ...antdProps } = props;

  return (
    <div className="custom-button">
      {/* <ConfigProvider prefixCls="md" iconPrefixCls="mdicon"> */}
      <Button {...antdProps}>{children}</Button>
      {/* </ConfigProvider> */}
    </div>
  );
};

export default CustomButton;
