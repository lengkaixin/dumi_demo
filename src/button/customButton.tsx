import React from 'react';

import { Button, ButtonProps } from 'antd';

import './index.less';

export interface IBaseCustomButtonProps {}

type TCustomButtonProps = IBaseCustomButtonProps & ButtonProps;

const CustomButton = (props: TCustomButtonProps) => {
  const { children, ...antdProps } = props;

  return (
    <div className="custom-button">
      <Button {...antdProps}>{children}</Button>
    </div>
  );
};

export default CustomButton;
