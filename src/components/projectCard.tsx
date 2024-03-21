import * as React from 'react'
import { Card, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

type ProjectProps = {
  title: string
  imageSrc: string
  imageAlt: string
  slug: string
}

export const Project = (props: ProjectProps) => {
  return (
    <Link
      to={`projects/${props.slug}`}
      component={RouterLink}
      style={{ textDecoration: 'none' }}
    >
      <Card
        className="project-container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          style={{
            maxWidth: '100%',
            aspectRatio: 1,
            display: 'block',
          }}
        />
        <div
          style={{
            marginTop: 10,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          {props.title}
        </div>
      </Card>
    </Link>
  )
}

export default Project
