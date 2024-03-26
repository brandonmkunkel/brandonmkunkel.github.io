import * as React from 'react'
import { Card, Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Box } from '@mui/system'
import { BlogProps, PlaceholderImage } from '../pages/blogs'

export const BlogCard = (props: BlogProps) => {
  return (
    <Link
      to={props.link}
      component={RouterLink}
      style={{ textDecoration: 'none' }}
    >
      <Card className="project-container">
        <Stack direction="row" gap={2}>
          <img
            src={props.imageSrc ?? PlaceholderImage}
            alt={props.imageAlt}
            style={{
              maxWidth: '300px',
              display: 'block',
            }}
          />

          <Box
            style={{
              margin: 3,
              fontWeight: 'bold',
            }}
          >
            <Typography variant="h4" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body1">{props.title}</Typography>
          </Box>
        </Stack>
      </Card>
    </Link>
  )
}

export default BlogCard
