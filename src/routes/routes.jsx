import React, { Suspense } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
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
const Rewards = React.lazy(() => import('../pages/Rewards'))
const ConfirmEmail = React.lazy(
  () => import('../pages/Authentication/ForgotPass/ConfirmEmail')
)
const ResetPassword = React.lazy(
  () => import('../pages/Authentication/ForgotPass/ResetPassword')
)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      // {
      //   index: true,
      //   element: <Navigate to={ROUTE_PATH.LOGIN} replace />, // Default redirect to /login
      // },
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
            path: ROUTE_PATH.CONFIRM_EMAIL,
            element: (
              <Suspense fallback={null}>
                <ConfirmEmail />
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
          {
            path: ROUTE_PATH.CURRENT_BALANCE,
            element: (
              <Suspense fallback={null}>
                <Rewards />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: ROUTE_PATH.RESET_PASSWORD,
        element: (
          <Suspense fallback={null}>
            <ResetPassword />
          </Suspense>
        ),
      },
    ],
  },
])
