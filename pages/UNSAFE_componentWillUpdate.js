import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function ComponentWillUpdate() {

    const lifecycle = "UNSAFE_componentWillUpdate";
    const details = "setState() should not be called in this lifecycle because, the UNSAFE_componentWillUpdate() is called when a component is about to update due to change in a state triggered either by a setState() or by a state management library. Hence calling setState() here triggers another UNSAFE_componentWillUpdate() and end up in an infinite loop."

    return (
      <React.Fragment>
        <HeadContent lifecycle={lifecycle} />
        <Base
          cannotCall
          lifecycle={lifecycle}
          details={details}
        />
      </React.Fragment>
    )
}
