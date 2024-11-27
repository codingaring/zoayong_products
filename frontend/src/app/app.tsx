import { Global } from '@emotion/react';
import { globalCSS } from '@styles/globals';
import { PropsWithChildren } from 'react';

const App = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Global styles={globalCSS} />
      <main>{children}</main>
    </>
  );
};

export default App;
