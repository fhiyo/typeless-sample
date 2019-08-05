import { ActionMap, ConvertActions, createModule, HandleWithState, StateGetter } from 'typeless';
import { User } from "../../types";

export const SelectUserSymbol = Symbol('selectUser');

interface SelectUserActions extends ActionMap {
    // fetchAllUsers: (users: User[]) => ({ payload: { users: User[] }});
    fetchAllUsers: null;
    setAllUsers: (users: User[]) => ({ payload: { users: User[] }});
    changeUser: (userId: string) => ({ payload: string });
    dummy: null;
}

export type SelectUserState = {
  allUsers: User[],
  selected: User,
}

export const modules = createModule(SelectUserSymbol)
  .withActions<SelectUserActions>({
    //   fetchAllUsers: (users: User[]) => ({ payload: { users }}),
      fetchAllUsers: null,
      setAllUsers: users => ({ payload: { users } }),
      changeUser: userId => ({ payload: userId }),
      dummy: null,
      $init: null,
      $mounted: null,
  })
  .withState<SelectUserState>();

export const useModule: HandleWithState<SelectUserState> = modules[0];
export const SelectUserActions: ConvertActions<SelectUserActions> = modules[1];
export const getSelectUserState: StateGetter<SelectUserState> = modules[2];
