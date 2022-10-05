import { getAll } from './api/users'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllUsers = createAsyncThunk('USER_FETCH', async () => {
  const users = await getAll();
  return users;
});

// export function getAllUsers() {
//   return async (dispatch, getState) => {
//     dispatch(userFetch());
//     const users = await getAll();
//     dispatch(userFetchSuccess(users));
//   }
// }

// function createAction(type) {
//   return function(payload) {
//     return {
//       type,
//       payload
//     }
//   }
// }

// export function userFetch() {
//   return {
//     type: USER_FETCH,
//   };
// }
// export const userFetch = createAction('USER_FETCH');
// export const userFetchSuccess = createAction('USER_FETCH_SUCCESS');

// export function userFetchSuccess(users) {
//   return {
//     type: USER_FETCH_SUCCESS,
//     payload: users,
//   };
// }



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// // Define a service using a base URL and expected endpoints
// export const pokemonApi = createApi({
//   reducerPath: 'pokemonApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
//   endpoints: (builder) => ({
//     getPokemonByName: builder.mutation({
//       query: (name) => `pokemon/${name}`,
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPokemonByNameQuery } = pokemonApi
