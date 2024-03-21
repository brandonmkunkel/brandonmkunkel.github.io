import PageBody from '../components/pageBody'
import ParticleBackground from '../components/particleBackground'

import { Box } from '@mui/system'

const HomePage = () => {
  return (
    <PageBody>
      <Box
        sx={{
          padding: { xs: 0, sm: 1 },
        }}
      >
        <h1>Hello World</h1>
        <h2>Polyglot Software Engineer</h2>
        <h2>I'll help you connect the dots</h2>
      </Box>

      <ParticleBackground />
    </PageBody>
  )
}

export default HomePage
