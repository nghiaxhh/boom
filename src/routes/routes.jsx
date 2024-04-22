import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_PATH } from './route.constant'

import AppLayout from '../layouts/AppLayout'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTE_PATH.HOME,
            element: (
              <Suspense fallback={null}>
                <HomePage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.HOME,
            element: (
              <Suspense fallback={null}>
                <div>home</div>
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])
