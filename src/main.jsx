import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { SignInProvider } from './app/context/sign-in-provider/sign-in-provider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SignInProvider>
      <App />
    </SignInProvider>
  </StrictMode>,
)
