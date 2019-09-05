import React from 'react';

const withUserData = (Component) => {
  function WithUserData(props) {
    return <Component {...props} />;
  }

  return WithUserData;
};

export default withUserData;
