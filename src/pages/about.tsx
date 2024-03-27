import { Typography } from '@mui/material'
import PageBody from '../components/pageBody'

// type Achievement = {
//   label: string
//   value: number
// }
// const Achievements: Achievement[] = [
//   { label: 'Patents', value: 2 },
//   { label: 'Papers Published', value: 4 },
//   { label: 'Products Released', value: 6 },
//   { label: 'Promotions', value: 2 },
// ]

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
      <br />

      {/* <Typography variant="h4" component="h2" gutterBottom>
        Achievements
      </Typography>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {Achievements.map((a) => {
          return (
            <Card
              sx={{
                width: 150,
                height: 120,
                padding: 1,
                textAlign: 'center',
                backgroundColor: theme.palette.divider,
              }}
            >
              <Stack justifyContent="space-between">
                <Typography variant="h5" component="div">
                  {a.label}
                </Typography>
                <Typography variant="h5" component="div" color="text.secondary">
                  {a.value}
                </Typography>
              </Stack>
            </Card>
          )
        })}
      </Stack> */}
    </PageBody>
  )
}

export default AboutPage
