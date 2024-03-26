import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import {
  Box,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { LightModeButton } from '../theme'

const drawerWidth = 240
const navMap = {
  Home: '/',
  About: '/about',
  Resume: '/resume',
  // Projects: '/projects',
  // Blog: '/blog',
}

function DrawerNavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Brandon Kunkel
      </Typography>
      <Divider />
      <List>
        {Object.entries(navMap).map(([page, route]) => (
          <ListItem key={page} disablePadding>
            {/* <Link primary={page} to={route}>{page}</Link> */}
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={RouterLink}
              to={route}
            >
              <ListItemText primary={page} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ my: 2, flexGrow: 1, display: { xs: 'block', sm: 'none' } }}
          >
            <Link
              color="inherit"
              component={RouterLink}
              sx={{ textDecoration: 'none' }}
              to="/"
            >
              Brandon Kunkel
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Link
              color="inherit"
              component={RouterLink}
              sx={{ textDecoration: 'none' }}
              to="/"
            >
              Brandon Kunkel
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Object.entries(navMap).map(([page, route]) => (
              // <Link to={route}>{page}</Link>
              <Button
                key={page}
                sx={{ color: '#fff' }}
                component={RouterLink}
                to={route}
              >
                {page}
              </Button>
            ))}
          </Box>
          <LightModeButton />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

export default DrawerNavBar
