import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import React from "react"

function MyComponent() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

export default MyComponent