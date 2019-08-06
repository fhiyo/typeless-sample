import * as React from 'react';
import { useActions } from 'typeless';
import { UserDetailActions, getUserDetailState } from '../interface';

export const UserDetail = () => {
  const { selectedUserDetail } = getUserDetailState.useState();

  return (
    <div>
        <h3>User Detail</h3>
            <li>userId: {selectedUserDetail.userId}</li>
            <li>sex: {selectedUserDetail.sex}</li>
            <li>age: {selectedUserDetail.age}</li>
            <li>email: {selectedUserDetail.email}</li>
    </div>
  );
}
