import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { Link, Route, Routes } from 'react-router-dom';

import UsersAdd from '../UsersAdd/UsersAdd';
import UsersList from '../UsersList/UsersList';
import UsersShow from '../UsersShow/UsersShow';

export default function Users() {
  return (
    <div className="Users">
      <Grid container spacing={10}>
        <Grid item xs={12} sm={4}>
          <UsersList />
          <Button color="primary" variant="outlined" component={Link} to="add">
            Add <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Routes>
            <Route path="add" element={<UsersAdd />} />
            <Route path=":id" element={<UsersShow />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
}
