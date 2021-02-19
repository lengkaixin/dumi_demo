/**
 * title.zh-CN: 按钮类型
 * title.en-US: Type
 * desc.zh-CN: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多次。
 * desc.en-US: There are `primary` button, `default` button, `dashed` button, `text` button and `link` button in antd.
 */

import React from 'react';
import { Button } from 'md_components';

export default () => (
  <>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
  </>
);
