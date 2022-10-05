import { createReducer } from '@reduxjs/toolkit';
import { getAllUsers, userFetch, userFetchSuccess } from './actions';

const initialValue = {
  loading: false,
  items: [],
};

/*
export function usersReducer(previousState = initialValue, { type, payload }) {
  switch (type) {
    case userFetch.type:
      previousState.loading = true;
      return previousState;
      // return {
      //   ...previousState,
      //   loading: true,
      //  // items: [],
      // };
    case userFetchSuccess.type:
      return {
        ...previousState,
        loading: false,
        items: payload,
      };
    default:
      return previousState;
  }
}
*/

export const usersReducer = createReducer(initialValue, (builder) => {
  builder
    .addCase(getAllUsers.pending, (state, action) => {
      state.loading = true;
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    });
});
