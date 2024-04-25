import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster position="top-right" richColors expand />
      <RouterProvider router={router} />
    </>
  )
}

export default App
