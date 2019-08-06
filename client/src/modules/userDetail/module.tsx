import * as React from 'react';
import * as Rx from 'typeless/rx';
import { UserDetailActions, UserDetailState, useModule } from './interface';
import { SelectUserActions } from "../selectUser/interface";
import { UserDetail } from './components/UserDetail';
import { userDetailsService } from "../../service/UserDetailServer";
import { UserDetail as UserDetailType } from "../../types";


useModule
  .epic()
  .on(UserDetailActions.fetchUserDetail, () =>
    userDetailsService.fetchAllUserDetails()
      .pipe(Rx.map((elems: UserDetailType[]) => UserDetailActions.setUserDetail(elems)))
  )
  .on(UserDetailActions.$mounted, () =>
    userDetailsService.fetchAllUserDetails()
      .pipe(Rx.mergeMap((userDetails) => {
          return [
            UserDetailActions.setUserDetail(userDetails),
            UserDetailActions.changeUserDetail(userDetails[0].userId),
          ]
      }))
  )
  .on(SelectUserActions.changeUser, (userId) =>
      UserDetailActions.changeUserDetail(userId)
  );

const initialState: UserDetailState = {
    selectedUserDetail: {userId: '', sex: null, age: null, email: null},
    allUserDetails: [],
};


useModule
  .reducer(initialState)
  .on(UserDetailActions.setUserDetail, (state, { userDetails }) => {
      state.allUserDetails = userDetails;
  })
  .on(UserDetailActions.changeUserDetail, (state, { userId }) => {
      const userDetail = state.allUserDetails.find(userDetail => userDetail.userId === userId)
      if (userDetail) {
          state.selectedUserDetail = userDetail;
      }
  });


export const UserDetailModule = () => {

  useModule();

  return <UserDetail />;
}
