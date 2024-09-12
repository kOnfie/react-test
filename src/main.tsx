import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/routes/router';
import { RouterProvider } from 'react-router-dom';

import 'src/app/styles/global.scss';
import { Provider } from 'react-redux';
import { store } from './app/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
