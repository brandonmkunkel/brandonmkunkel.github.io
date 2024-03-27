import { Button, Stack, Typography } from '@mui/material'
import PageBody from '../../components/pageBody'
import { Link as RouterLink } from 'react-router-dom'

const XfcPage = () => {
  return (
    <PageBody title="Explainable Fuzzy Competition">
      <Stack direction="row" gap={2} marginY={2}>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to={'https://xfuzzycomp.github.io/XFC/'}
        >
          Website
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={RouterLink}
          to={'https://github.com/xfuzzycomp'}
        >
          Github Org
        </Button>
      </Stack>

      <Typography>
        I helped start the Explainable Fuzzy Competition in 2021 during my time
        at Thales. This open-source competition was a collaboration between
        NAFIPS, the University of Cincinnati and Thales and the goal was to
        further evangelize the genetic fuzzy AI techniques we developed at
        Psibernetix at the university level to encourage students to continue
        researching the topic.
      </Typography>
      <br />
      <Typography>
        My contributions to the open source competition included: building the
        game environment for the competition, providing support to the
        university students about how to develop within the game environment and
        producing this hype video using footage from the contestant's fuzzy
        agents.
      </Typography>
      <br />
      <iframe
        width="600"
        height="340"
        src="https://www.youtube.com/embed/4OH27tjQIYU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </PageBody>
  )
}

export default XfcPage
