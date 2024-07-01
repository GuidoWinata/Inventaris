import React from 'react';
import routes from './Utils/RouteList';
import '@fontsource/plus-jakarta-sans';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
