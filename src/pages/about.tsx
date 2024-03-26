import { Typography } from '@mui/material'
import PageBody from '../components/pageBody'

const AboutPage = () => {
  return (
    <PageBody title="About">
      <Typography>
        I originally studied Aerospace Engineering for my Bachelors and and used
        my coding experiences in college to transition to Software Engineering
        as a career. My career started in AI/ML at Psibernetix where we worked
        on a novel technique called the Genetic Fuzzy Tree, where I advanced the
        technique by optimizing and improving features of our toolkit, as well
        as building models to apply the technique to a variety of applications.
      </Typography>
      <br />
      <Typography>
        But 4 years into my career I identified some glaring holes in my
        skillset and sought out new opportunities to gain frontend, backend,
        distributed systems and cloud technologies. In my 7 years at 3 startups,
        I have seen promotions, product releases, an acquisition, layoffs and a
        company closure.
      </Typography>
      <br />
      <Typography>
        Throughout my professional experiences I learned to be resilient, solve
        difficult problems, mentor engineers, and make products that make users
        love. I am eager to continue learning, honing my skills, and make an
        impact in your company and the industry. Let's do great things together.
      </Typography>
    </PageBody>
  )
}

export default AboutPage
