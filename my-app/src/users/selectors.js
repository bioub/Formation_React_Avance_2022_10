import { createSelector } from "@reduxjs/toolkit";

export function selectUsers(state) {
  return state.users;
}

export function selectUsersLoading(state) {
  return selectUsers(state).loading;
}

export function selectUsersItems(state) {
  return selectUsers(state).items;
}

// export function selectUsersItemsById(state, id) {
//   console.log('call selectUsersItemsById');
//   return selectUsersItems(state).find((items) => items.id === Number(id));
// }

export const selectUsersItemsById = createSelector(
  [
    // Usual first input - extract value from `state`
    selectUsersItems,
    // Take the second arg, `category`, and forward to the output selector
    (state, id) => id,
  ],
  (users, id) => {
    console.log('call selectUsersItemsById', users, id);
    return users.find((items) => items.id === Number(id))
  },
)
