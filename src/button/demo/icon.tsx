/**
 * title.zh-CN: 图标按钮
 * title.en-US: Icon
 * desc.zh-CN: 按钮有五种类型：当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。<br />如果想控制 Icon 具体的位置，只能直接使用 Icon 组件，而非 icon 属性。
 * desc.en-US: Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button.<br />If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon component within the Button rather than using the icon property.
 */

import React from 'react';
import { Button, Tooltip } from 'md_components';
import { SearchOutlined } from '@ant-design/icons';

export default () => (
  <>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="primary" shape="circle">
      A
    </Button>
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <br />
    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button icon={<SearchOutlined />}>Search</Button>
    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
  </>
);
