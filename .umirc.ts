import { defineConfig } from 'dumi';
import pack from './package.json';

import antdTheme from './src/styles/antdTheme.js';
import menus from './config/menus.js';

const antdVersion = pack.dependencies.antd.split('^')[1];

export default defineConfig({
  title: 'MD-Components',
  favicon: '/images/MDLogoIcon.png',
  logo: '/images/MDLogoIcon.png',
  outputPath: 'docs-dist',
  theme: antdTheme,
  mode: 'site',
  menus,
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
  // 多语言配置方式如下
  navs: {
    // 多语言 key 值需与 locales 配置中的 key 一致
    'en-US': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: `${pack.version}-${antdVersion}`,
        // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
        children: [
          { title: 'Example 1', path: 'https://d.umijs.org' },
          { title: 'Example 2', path: '/guide' },
        ],
      },
      {
        title: 'GitHub',
        path: 'https://github.com/umijs/dumi',
      },
    ],
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: `${pack.version}-${antdVersion}`,
        // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
        children: [
          { title: '示例第一项', path: 'https://d.umijs.org' },
          { title: '示例第二项', path: '/guide' },
        ],
      },
      {
        title: 'GitHub',
        path: 'https://github.com/umijs/dumi',
      },
    ],
  },
  // more config: https://d.umijs.org/config
});
