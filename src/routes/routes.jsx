import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_PATH } from './route.constant'
import AppLayout from '../layouts/AppLayout'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import Login from '../pages/Authentication/Login'
import SignUp from '../pages/Authentication/SignUp'

const HomePage = React.lazy(() => import('../pages/HomePage'))
const RootPage = React.lazy(() => import('../pages/RootPage'))
const UserInfo = React.lazy(() => import('../pages/UserInfo'))
const ForgotPass = React.lazy(
  () => import('../pages/Authentication/ForgotPass')
)

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
            path: '/',
            element: (
              <Suspense fallback={null}>
                <RootPage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.LOGIN,
            element: (
              <Suspense fallback={null}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.SIGN_UP,
            element: (
              <Suspense fallback={null}>
                <SignUp />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.FORGOT_PASS,
            element: (
              <Suspense fallback={null}>
                <ForgotPass />
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
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.USER_INFO,
            element: (
              <Suspense fallback={null}>
                <UserInfo />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])
