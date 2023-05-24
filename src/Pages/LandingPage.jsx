import React from 'react'
import NavbarLogo from '../components/NavbarLogo/NavbarLogo'
import Bienvenida from '../components/Bienvenida/Bienvenida'
import LoginButton from '../components/LoginButton/LoginButton'
import LogoutButton from '../components/LogoutButton/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import GoogleForm from '../components/GoogleForm/GoogleForm'


const LandingPage = () => {
    const { isAuthenticated } = useAuth0()

  return (
    <div>
      <header>
        <NavbarLogo/>
      </header>
      <main>
        <Bienvenida/>
        <div className='btns-container'>
            {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
        </div>
        <div className='form-container'>
            {isAuthenticated ? <GoogleForm/> : <div>Favor de iniciar sesion para mostrar el planeador</div>}
        </div>
      </main>
      

    </div>
  )
}

export default LandingPage
