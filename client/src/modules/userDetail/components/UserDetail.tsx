import * as React from 'react';
import { useActions } from 'typeless';
import { UserDetailActions, getUserDetailState } from '../interface';

export const UserDetail = () => {
  const { startCount } = useActions(UserDetailActions);
  const { isLoading, count } = getUserDetailState.useState();

  return (
    <div>
      <button disabled={isLoading} onClick={startCount}>
        {isLoading ? 'loading...' : 'increase'}
      </button>
      <div data-testid="state"> count: {count}</div>
    </div>
  );
}