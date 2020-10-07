import React from 'react'
import { ActionButton } from '../Buttons'

interface HeaderProps {
  user: { username: string } | null
  onLogin: (e: React.MouseEvent) => void
  onLogout: (e: React.MouseEvent) => void
  onCreateAccount: (e: React.MouseEvent) => void
}

export const Header: React.FC<HeaderProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <header>
    <div className={'wrapper'}>
      <h1>Welcome to your calendar</h1>
      {user ? (
        <ActionButton onClick={onLogout} buttonText="Log Out" />
      ) : (
        <>
          <ActionButton onClick={onLogin} buttonText="Log In" />
          <ActionButton onClick={onCreateAccount} buttonText="Sign Up" />
        </>
      )}
    </div>
  </header>
)
