import { Box, Stack, Link, Typography, useTheme } from '@mui/material'
import PageBody from '../components/pageBody'
import ParticleBackground from '../components/particleBackground'
import MailtoButton from '../components/emailButton'
import headshot from '../assets/headshot.jpg'
import linkedIn from '../assets/linkedin-logo.png'
import github from '../assets/github-logo.svg'
import githubWhite from '../assets/github-logo-white.svg'

import { Link as RouterLink } from 'react-router-dom'
import { Email } from '@mui/icons-material'

const HomePage = () => {
  const theme = useTheme()

  return (
    <PageBody>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-evenly"
        alignItems="center"
        height={'80vh'}
        sx={{ margin: 2 }}
      >
        <Stack direction="column" gap={1}>
          <Typography variant="h3" color={theme.palette.primary.main}>
            Hello World,
          </Typography>
          <Typography variant="h2">I'm Brandon Kunkel</Typography>
          <Typography variant="h4">Software Engineer</Typography>

          <Stack direction="row" gap={3} marginTop={3}>
            <Link
              component={RouterLink}
              to={'https://www.linkedin.com/in/brandon-kunkel/'}
            >
              <img
                src={linkedIn}
                alt="LinkedIn"
                style={{
                  height: '40px',
                }}
              />
            </Link>

            <Link
              component={RouterLink}
              to={'https://www.github.com/brandonmkunkel'}
            >
              <img
                src={theme.palette.mode === 'dark' ? githubWhite : github}
                alt="Github"
                style={{
                  height: '40px',
                }}
              />
            </Link>

            <Link component={RouterLink} to={'mailto:brandonmkunkel@gmail.com'}>
              <Email sx={{ height: '40px', width: '40px' }} />
            </Link>
          </Stack>
        </Stack>

        <Box width={{ xs: '300px', sm: '500px' }}>
          <img
            src={headshot}
            style={{
              width: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              aspectRatio: 1,
            }}
          />
        </Box>
      </Stack>

      <ParticleBackground />
    </PageBody>
  )
}

export default HomePage
