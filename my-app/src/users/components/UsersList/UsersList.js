import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { userFetch, userFetchSuccess } from '../../actions';
import { getAll } from '../../api/users';

export default function UsersList() {
  const dispatch = useDispatch();
  const { items = [], loading } = useSelector((state) => state.users);

  useEffect(() => {
    (async () => {
      dispatch(userFetch());
      const users = await getAll();
      dispatch(userFetchSuccess(users));
    })();
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
