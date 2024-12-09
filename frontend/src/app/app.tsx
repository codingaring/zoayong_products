import { PropsWithChildren } from 'react';

const App = ({ children }: PropsWithChildren) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default App;
