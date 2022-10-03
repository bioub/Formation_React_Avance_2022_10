import { CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUsersLoading } from '../../selectors';

export default function UsersShow() {
  const params = useParams();
  const user = useSelector((state) => state.users.items.find((u) => u.id === Number(params.id)));
  const loading = useSelector(selectUsersLoading);

  return (
    <div className="UsersShow">
      {loading && <CircularProgress />}
      {!loading && user && (
        <>
          <h2>{user.name}</h2>
          <h3>Phone</h3>
          <p>{user.phone}</p>
          <h3>Email</h3>
          <p>{user.email}</p>
          <h3>Address</h3>
          <p>
            {user.address.street}
            <br />
            {user.address.city}
            {user.address.zipcode}
          </p>
        </>
      )}
    </div>
  );
}
