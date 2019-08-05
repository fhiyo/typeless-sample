import * as React from 'react';
import * as Rx from 'typeless/rx';
import { UserDetailActions, UserDetailState, useModule } from './interface';
import { UserDetail } from './components/UserDetail';


useModule
  .epic()
  .on(UserDetailActions.startCount, () =>
    Rx.of(UserDetailActions.countDone(1)).pipe(Rx.delay(500))
  );

const initialState: UserDetailState = {
  isLoading: false,
  count: 0,
};


useModule
  .reducer(initialState)
  .on(UserDetailActions.startCount, state => {
    state.isLoading = true;
  })
  .on(UserDetailActions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });


export const UserDetailModule = () => {

  useModule();

  return <UserDetail />;
}
