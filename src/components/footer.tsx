import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

// stateless footer
const FooterComponent = () => {
  return (
    <footer className="footer">
      Copyright © 2023: &nbsp;
      <Link to="/" component={RouterLink}>
        Brandon Kunkel
      </Link>
    </footer>
  )
}

export default FooterComponent
