import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllUsers } from '../../actions';

export default function UsersList() {
  const dispatch = useDispatch();
  const { items = [], loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]);

  return (
    <div className="UsersList">
      {loading ? (
        <CircularProgress />
      ) : (
        <List component="nav">
          {items.map((user) => (
            <ListItem key={user.id} button component={Link} to={String(user.id)}>
              <ListItemText>{user.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}
