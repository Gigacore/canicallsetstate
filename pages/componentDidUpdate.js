import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function ComponentDidUpdate() {
  const lifecycle = "componentDidUpdate";
  const details = "You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition like in the example below, or you’ll cause an infinite loop. It would also cause an extra re-rendering which, while not visible to the user, can affect the component performance.";
  const example = `
      componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }`


    return (
      <React.Fragment>
        <HeadContent lifecycle={lifecycle} />
        <Base
          conditionalCall
          lifecycle={lifecycle}
          details={details}
          example={example}
        />
      </React.Fragment>
    )
}
