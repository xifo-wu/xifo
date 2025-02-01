import React, { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="pl-75">{children}</div>;
};

export default Container;
