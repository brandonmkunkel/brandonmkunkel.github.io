import { Typography, useTheme } from '@mui/material'
import PageBody from '../components/pageBody'
import ParticleBackground from '../components/particleBackground'
import MailtoButton from '../components/emailButton'
import headshot from '../assets/headshot.jpg'
import linkedIn from '../assets/linkedin-logo.png'
import github from '../assets/github-logo.svg'
import githubWhite from '../assets/github-logo-white.svg'

import { Box, Button, Stack, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const HomePage = () => {
  const theme = useTheme()

  return (
    <PageBody>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-evenly"
        alignItems="center"
        height="90vh"
        sx={{ margin: 2 }}
      >
        <Stack direction="column" gap={1}>
          <Typography variant="h3" color={theme.palette.primary.main}>
            Hello World,
          </Typography>
          <Typography variant="h2">I'm Brandon Kunkel</Typography>
          <Typography variant="h4">Fullstack Software Engineer</Typography>

          <Stack direction="row" gap={2} marginTop={5}>
            <Link component={RouterLink} to={'www.linkedin.com/brandon.kunkel'}>
              <img
                src={linkedIn}
                alt="LinkedIn"
                style={{
                  height: '40px',
                }}
              />
            </Link>

            <Link component={RouterLink} to={'www.github.com/brandonmkunkel'}>
              <img
                src={theme.palette.mode === 'dark' ? githubWhite : github}
                alt="Github"
                style={{
                  height: '40px',
                }}
              />
            </Link>

            <MailtoButton email="brandonmkunkel@gmail.com"></MailtoButton>
          </Stack>
        </Stack>

        <Box>
          <img
            src={headshot}
            style={{
              height: '500px',
              borderRadius: '50%',
              aspectRatio: 1,
              display: 'block',
            }}
          />
        </Box>
      </Stack>

      <ParticleBackground />
    </PageBody>
  )
}

export default HomePage
