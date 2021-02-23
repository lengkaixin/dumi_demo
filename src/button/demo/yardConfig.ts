import { PropTypes } from 'react-view';
import { Button } from 'md_components';

/**
 * -- placeholder 方式的写法Demo --
 * startEnhancer: {
 *  value: undefined,
 *  placeholder: '() => <span>🦊</span>',
 *  type: PropTypes.Function,
 *  description: `A component rendered at the start of the button.`,
 * }
 */

const ButtonYardConfig = {
  componentName: 'Button',
  props: {
    children: {
      value: 'Hello',
      type: PropTypes.ReactNode,
      description: 'Visible label.',
    },
    onClick: {
      value: '() => alert("click")',
      type: PropTypes.Function,
      description: 'Function called when button is clicked.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates that the button is disabled',
    },
    size: {
      value: 'default',
      defaultValue: 'default',
      options: { large: 'large', default: 'default', small: 'small' },
      type: PropTypes.Enum,
      description: 'Defines the size of the button.',
    },
    type: {
      value: 'primary',
      defaultValue: 'default',
      options: {
        default: 'default',
        primary: 'primary',
        dashed: 'dashed',
        text: 'text',
        link: 'link',
      },
      type: PropTypes.Enum,
      description: 'Defines the type of the button.',
    },
  },
  scope: {
    Button,
  },
  imports: {
    md_components: {
      named: ['Button'],
    },
  },
};

export default ButtonYardConfig;
