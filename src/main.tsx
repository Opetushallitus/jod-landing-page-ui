import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Metric } from 'web-vitals';
import './i18n/config';
import './index.css';
import { routes } from './routes';

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root')!);

if (process.env.NODE_ENV !== 'production') {
  import('web-vitals').then((vitals) => {
    const warnOnlyNegativeMetrics = (metric: Metric) => {
      if (metric.rating !== 'good') {
        console.warn(`Metric ${metric.name} is not good`, metric);
      }
    };
    vitals.onCLS(warnOnlyNegativeMetrics);
    vitals.onINP(warnOnlyNegativeMetrics);
    vitals.onFCP(warnOnlyNegativeMetrics);
    vitals.onLCP(warnOnlyNegativeMetrics);
    vitals.onTTFB(warnOnlyNegativeMetrics);
  });
  import('@axe-core/react').then((axe) => {
    axe.default(React, root, 1000);
  });
}

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
