import React from 'react';

export const Main = ({ children }) => {
  return (
    <main className="container-fluid ps-5 pe-5">
      <div className="row text-light">{children}</div>
    </main>
  );
};
