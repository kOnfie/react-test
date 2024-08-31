import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './app/routes/router';
import { RouterProvider } from 'react-router-dom';

import 'src/app/styles/global.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
