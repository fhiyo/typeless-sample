import { createModule } from 'typeless';
import { UserDetail } from "../../types";
import { UserDetailSymbol } from "./symbol";

export const [useModule, UserDetailActions, getUserDetailState] = createModule(UserDetailSymbol)
  .withActions({
    fetchUserDetail: null,
    setUserDetail: (userDetails: UserDetail[]) => ({ payload: { userDetails }}),
    changeUserDetail: (userId: string) => ({ payload: { userId }}),
    $mounted: null,
  })
  .withState<UserDetailState>();

export interface UserDetailState {
    selectedUserDetail: UserDetail;
    allUserDetails: UserDetail[];
}
