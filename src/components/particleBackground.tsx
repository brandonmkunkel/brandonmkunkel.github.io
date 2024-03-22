'use client'

import { useEffect, useState } from 'react'
import { Particles, initParticlesEngine } from '@tsparticles/react'
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine'
import { loadFull } from 'tsparticles'
import { useTheme } from '@mui/material'

const ParticleBackground = () => {
  const theme = useTheme()

  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine)
      // await loadSlim(engine)
      //await loadBasic(engine);
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesConfig: ISourceOptions = {
    background: {
      color: 'transparent',
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        // resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
      },
      links: {
        color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          // area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  return init && <Particles id="tsparticles" options={particlesConfig} />
}

export default ParticleBackground
