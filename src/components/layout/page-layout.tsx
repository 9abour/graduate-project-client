import React from 'react';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="mt-[150px]">{children}</main>;
};

export default PageLayout;
