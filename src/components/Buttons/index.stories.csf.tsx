import React from 'react'
import { action } from '@storybook/addon-actions'
import { ActionButton } from './ActionButton'

export default {
  title: 'Action Buttons',
  decorators: [(Story: React.FC) => <Story />],
}

export const Default = () => (
  <>
    <ActionButton buttonText="Log In" onClick={action('logged in')} />
    <ActionButton buttonText="Log Out" onClick={action('logged out')} />
    <ActionButton buttonText="Sign Up" onClick={action('account created')} />
  </>
)

export const LoginButtonOnly = () => (
  <ActionButton buttonText="Log In" onClick={action('logged in')} />
)

export const LogoutButtonOnly = () => (
  <ActionButton buttonText="Log Out" onClick={action('logged out')} />
)

export const SignupButtonOnly = () => (
  <ActionButton buttonText="Sign Up" onClick={action('account created')} />
)
