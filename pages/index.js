import React from 'react';
import Constructor from './constructor';
import HeadContent from '../components/HeadContent'

export default () => {
  return(
    <React.Fragment>
      <HeadContent lifecycle={'constructor'} />
      <Constructor />
    </React.Fragment>
  )
}
