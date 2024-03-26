import { PropsWithChildren } from 'react'
import { Box, Typography } from '@mui/material'

type PageBodyProps = {
  title?: string
}

const PageBody = (props: PropsWithChildren<PageBodyProps>) => {
  return (
    <Box
      sx={{
        margin: 1,
      }}
    >
      <Typography variant="h4" component="h1" marginLeft={1}>
        {props.title}
      </Typography>
      {props.children}
    </Box>
  )
}

export default PageBody
