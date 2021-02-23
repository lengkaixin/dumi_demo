---
title: Button 按钮
---

# Button 按钮

<!-- 展示 -->

```jsx | inline
import React from 'react';
import Yard from '../../src/yard/index.tsx';
import buttonYardConfig from '../../src/button/demo/yardConfig.ts';

export default () => <Yard {...buttonYardConfig} />;
```

## 按钮类型

<code src="../../src/button/demo/basic.tsx"></code>

## 图标按钮

<code src="../../src/button/demo/icon.tsx"></code>

<style>
  [id^="button-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
