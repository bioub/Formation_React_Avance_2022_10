import './TopBar.css';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="TopBar Select">
      <AppBar position="static" color="primary">
        <Toolbar className="TopBar-Toolbar">
          <Button component={Link} to="/" color="inherit">
            MyApp
          </Button>
          <Button component={Link} to="/todos" color="inherit">
            Todos
          </Button>
          <Button component={Link} to="/users" color="inherit">
            Users
          </Button>
          <Button component={Link} to="/demo-xlsx" color="inherit">
            Demo XLSX
          </Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
