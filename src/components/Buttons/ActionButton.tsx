import { Button } from '@material-ui/core'
import React from 'react'
import { BaseButtonProps } from './types'

export const ActionButton: React.FC<BaseButtonProps> = ({buttonText, ...props}) => {
  return <Button {...props}>{buttonText}</Button>
}