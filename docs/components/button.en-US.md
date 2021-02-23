---
title: Button
---

# Button

<!-- 展示 -->

```jsx | inline
import React from 'react';
import Yard from '../../src/yard/index.tsx';
import buttonYardConfig from '../../src/button/demo/yardConfig.ts';

export default () => <Yard {...buttonYardConfig} />;
```

## Type

<code src="../../src/button/demo/basic.tsx"></code>

## Icon

<code src="../../src/button/demo/icon.tsx"></code>

<style>
  [id^="button-"] .ant-btn {
  margin-right: 8px;
  margin-bottom: 12px;
}
</style>
