import * as React from 'react'
import { Card, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Box } from '@mui/system'
import { ProjectProps, PlaceholderImage } from '../pages/projects'

export const ProjectCard = (props: ProjectProps) => {
  return (
    <Card
      className="project-container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link
        to={props.link}
        component={RouterLink}
        style={{ textDecoration: 'none' }}
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
          sx={{
            textAlign: 'center',
            padding: 1,
          }}
        >
          <Typography fontWeight="bold" color="textPrimary">
            {props.title}
          </Typography>
        </Box>
      </Link>
    </Card>
  )
}

export default ProjectCard
