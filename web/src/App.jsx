import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhoneOtpForm from './components/otp-login/PhoneOtpForm'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <PhoneOtpForm/>
    </>
  )
}

export default App
