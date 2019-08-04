import * as React from 'react';
import * as Rx from 'typeless/rx';
import { User, SelectUserActions, SelectUserState, useModule } from './interface';
import { SelectUser } from './components/SelectUser';
import { userService } from '../../service/UserServer';

useModule
  .epic()
  .on(SelectUserActions.fetchAllUsers, () => {
    return userService
      .fetchAllUsers()
      .pipe(Rx.map((elems: User[]) => SelectUserActions.setAllUsers(elems)));
  })
  .on(SelectUserActions.$mounted, () =>
    Rx.of(SelectUserActions.fetchAllUsers())
  )


const initialState: SelectUserState = {
  allUsers: [],
  selected: null,
};

useModule
  .reducer(initialState)
  .on(SelectUserActions.setAllUsers, (state, { users }) => {
      alert('SelectUserActions.setAllUsers: reducer called');
      state.allUsers = users;
  })

export const SelectUserModule = () => {
  useModule();
  return <SelectUser />;
}
