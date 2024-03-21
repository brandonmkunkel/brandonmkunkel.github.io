import { PropsWithChildren } from 'react'
import { CssBaseline } from '@mui/material'

import Navbar from './navBar'
import Footer from './footer'
import { ColorModeToggler } from '../theme'

export default function Layout(props: PropsWithChildren) {
  return (
    <>
      <ColorModeToggler>
        <CssBaseline />
        <Navbar />
        <main>{props.children}</main>
        <Footer />
      </ColorModeToggler>
    </>
  )
}
