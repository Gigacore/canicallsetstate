import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function ComponentWillMount() {
    const lifecycle = "UNSAFE_componentWillMount";
    const details = "Calling setState() synchronously in this method will not trigger an extra rendering. It is recommended using the constructor() instead for initializing state."
    const example = `
    UNSAFE_componentWillMount() {
      axios.get('api/messages)
        .then((result) => {
          const messages = result.data
          this.setState({
            messages: [ ...messages.content ]
          })
    })
    `;

    return (
      <React.Fragment>
        <HeadContent lifecycle={lifecycle} />
        <Base
          canCall
          lifecycle={lifecycle}
          details={details}
          example={example}
        />
      </React.Fragment>
    )
}
