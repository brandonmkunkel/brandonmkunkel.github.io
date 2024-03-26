import { PropsWithChildren } from 'react'
import { Container, Typography } from '@mui/material'

type PageBodyProps = {
  title?: string
  sx?: React.CSSProperties
}

const PageBody: React.FC<PropsWithChildren<PageBodyProps>> = (props) => {
  return (
    <Container
      sx={{
        maxWidth: '1000',
        ...props.sx,
      }}
    >
      <Typography variant="h4" component="h1" marginY={1}>
        {props.title}
      </Typography>
      {props.children}
    </Container>
  )
}

export default PageBody
