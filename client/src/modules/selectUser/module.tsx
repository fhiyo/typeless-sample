import * as React from 'react';
import * as Rx from 'typeless/rx';
import { User } from "../../types";
import { SelectUserActions, SelectUserState, useModule } from './interface';
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
    userService.fetchAllUsers()
      .pipe(Rx.mergeMap((users) => {
          return [
            SelectUserActions.setAllUsers(users),
            SelectUserActions.changeUser(users[0].userId)]
      }))
  )


const initialState: SelectUserState = {
  allUsers: [],
  selected: {userId: '0', name: ''},
};

useModule
  .reducer(initialState)
  .on(SelectUserActions.setAllUsers, (state, { users }) => {
      alert('SelectUserActions.setAllUsers: reducer called');
      state.allUsers = users;
  })
  .on(SelectUserActions.changeUser, (state, userId) => {
      const user = state.allUsers.find(user => user.userId === userId);
      if (user) {
        console.log(`seleceted id: ${user.userId}, name: ${user.name}`)
        state.selected = user;
      }
  })

export const SelectUserModule = () => {
  useModule();
  return <SelectUser />;
}
