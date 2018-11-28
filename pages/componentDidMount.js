import React from 'react';
import Base from '../components/Base';
import HeadContent from '../components/HeadContent';

export default function ComponentDidMount() {
  const lifecycle = "componentDidMount";
  const details = "You may call setState() immediately in componentDidMount(). It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state. Use this pattern with caution because it often causes performance issues."
  const example = `
    componentDidMount() {
      setTimeout(() => {
        this.setState({name: "John Doe"});
      }, 1000)
    }
  `
  return (
    <React.Fragment>
      <HeadContent
        lifecycle={lifecycle}
        themeColor={'#4caf50'}
      />
      <Base
        canCall
        lifecycle={lifecycle}
        details={details}
        example={example}
      />
    </React.Fragment>
  )
}
