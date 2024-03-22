import { PropsWithChildren } from 'react'
import { Box } from '@mui/material'

type PageBodyProps = {
  title?: string
}

const PageBody = (props: PropsWithChildren<PageBodyProps>) => {
  return (
    <Box
      sx={{
        m: { xs: 1, sm: 1 },
        pt: { xs: 1, sm: 1 },
      }}
    >
      <h1>{props.title}</h1>
      {props.children}
    </Box>
  )
}

export default PageBody
