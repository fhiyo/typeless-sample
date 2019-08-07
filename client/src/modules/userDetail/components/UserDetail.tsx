import * as React from 'react';
import { useActions } from 'typeless';
import { UserDetailActions, getUserDetailState } from '../interface';

export const UserDetail = () => {
  const { selectedUserDetail } = getUserDetailState.useState();

  return (
    <div data-testid="div">
        <h3 data-testid="user-detail">User Detail</h3>
            <li>userId: {selectedUserDetail.userId}</li>
            <li>sex: {selectedUserDetail.sex}</li>
            <li>age: {selectedUserDetail.age}</li>
            <li>email: {selectedUserDetail.email}</li>
    </div>
  );
}
