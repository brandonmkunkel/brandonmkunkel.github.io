import React from 'react'
import { IconButton } from '@mui/material'
import { Email } from '@mui/icons-material'

const MailtoButton: React.FC<{
  email: string
}> = ({ email }) => {
  const handleClick = () => {
    window.open(`mailto:${email}`)
  }

  return (
    <IconButton onClick={handleClick} aria-label="delete" size="large">
      <Email />
    </IconButton>
  )
}

export default MailtoButton
