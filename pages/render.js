import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

import { RED } from '../constants/themeColors';

export default function Render() {
  const lifecycle = "render";
  const details = "Calling setState() in render() method will create infinite loop and could crash your application."

    return (
      <React.Fragment>
        <HeadContent
          lifecycle={lifecycle}
          themeColor={RED}
        />
        <Base
          callSetState={false}
          lifecycle={lifecycle}
          details={details}
        />
      </React.Fragment>
    )
}
