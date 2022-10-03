import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

export async function getAll() {
  const res = await axios.get(url);
  return res.data;
}
