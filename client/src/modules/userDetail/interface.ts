import { createModule } from 'typeless';
import { UserDetail } from "../../types";
import { UserDetailSymbol } from "./symbol";

export const [useModule, UserDetailActions, getUserDetailState] = createModule(UserDetailSymbol)
  .withActions({
    startCount: null,
    countDone: (count: number) => ({ payload: { count } }),
  })
  .withState<UserDetailState>();

export interface UserDetailState {
  isLoading: boolean;
  count: number;
}
