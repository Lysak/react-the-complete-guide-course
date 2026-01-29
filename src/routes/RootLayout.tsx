import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader.tsx'

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  )
}

export default RootLayout

export function HydrateFallback() {
  return (
    <>
      <MainHeader />
      <p style={{ textAlign: 'center', color: 'white' }}>
        Loading application...
      </p>
    </>
  )
}
