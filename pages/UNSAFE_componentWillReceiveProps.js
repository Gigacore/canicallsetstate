import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function ComponentWillReceiveProps() {
    const lifecycle = "UNSAFE_componentWillReceiveProps";
    const details = "If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method. Calling setState() outside the nextProps check would send your component on an indefinite render-loop if it constantly receives new props through a webservice or an event."
    const example = `
    UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps !== undefined) {
        this.setState({
          selectedService: nextProps.selectedService,
        });
      }

      if (
        nextProps &&
        (this.props.product !== nextProps.product)
       ) {
        this.setState({
          productData: this.updateProductData(nextProps);
        })
      }
    }
    `;

    return (
      <React.Fragment>
        <HeadContent
          lifecycle={lifecycle}
          themeColor={'#ffc107'}
        />
        <Base
          conditionalCall
          lifecycle={lifecycle}
          details={details}
          example={example}
        />
      </React.Fragment>
    )
}
