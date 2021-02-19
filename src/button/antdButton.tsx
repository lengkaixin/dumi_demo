import React from 'react';

import { Button, ButtonProps } from 'antd';

const AntdButton = (props: ButtonProps) => {
  const { ...antdProps } = props;
  return <Button {...antdProps}>AntdButton</Button>;
};

export default AntdButton;
