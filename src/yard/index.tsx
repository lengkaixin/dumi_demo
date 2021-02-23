/**
 * inline: true
 */

import React from 'react';
import { Card } from 'md_components';
import './index.less';

// import { View } from 'react-view';
import {
  useView,
  Compiler,
  // Knobs,
  // Editor,
  Error,
  // ActionButtons,
  Placeholder,
  PropTypes,
} from 'react-view';

import { ActionButtons } from './action-buttons';
import Knobs from './knobs';
import Editor from './editor';

const Yard = ({ componentName, scope, props, imports }) => {
  const params = useView({
    componentName: componentName,
    props: props,
    scope: scope,
    imports: imports,
  });
  return (
    <Card>
      <Compiler
        {...params.compilerProps}
        minHeight={62}
        placeholder={Placeholder}
      />
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </Card>
  );

  //  默认布局
  // return (
  //   <View
  //     componentName={componentName}
  //     scope={scope}
  //     props={props}
  //     imports={imports}
  //   />import { *asReact } from 'react';

  // );
};

export default Yard;
