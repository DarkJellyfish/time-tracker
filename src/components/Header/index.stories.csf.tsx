import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { Header } from '.'

export default {
  title: 'Header',
  decorators: [(Story: React.FC) => <Story />],
}

export const Default = () => {
  const [user, setUser] = useState<{ username: string } | null>(null)
  const onLogin = (e: React.MouseEvent) => {
    setUser({ username: 'liz' })
    action('logged in')(e)
  }
  const onLogout = (e: React.MouseEvent) => {
    setUser(null)
    action('logged out')(e)
  }
  return (
    <Header
      onCreateAccount={action('account created')}
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
    />
  )
}
