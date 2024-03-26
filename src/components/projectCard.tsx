import * as React from 'react'
import { Card, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Box } from '@mui/system'
import { ProjectProps, PlaceholderImage } from '../pages/projects'

export const ProjectCard = (props: ProjectProps) => {
  return (
    <Link
      to={props.link}
      component={RouterLink}
      style={{ textDecoration: 'none' }}
    >
      <Card
        className="project-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 1,
        }}
      >
        <img
          src={props.imageSrc ?? PlaceholderImage}
          alt={props.imageAlt}
          style={{
            maxWidth: '100%',
            aspectRatio: 1,
            display: 'block',
          }}
        />

        <Box
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {props.title}
        </Box>
      </Card>
    </Link>
  )
}

export default ProjectCard
