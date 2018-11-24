import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function Constructor() {

    const lifecycle = "constructor";
    const details = "If your component needs to use local state, assign the initial state to this.state directly in the constructor."
    const example = `
      constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
      }
    `

    return (
      <React.Fragment>
        <HeadContent lifecycle={lifecycle} />
        <Base
          cannotCall
          lifecycle={lifecycle}
          details={details}
          example={example}
        />
      </React.Fragment>
    )
}
