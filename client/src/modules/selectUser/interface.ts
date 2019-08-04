import { ActionMap, ConvertActions, createModule, HandleWithState, StateGetter } from 'typeless';

export const SelectUserSymbol = Symbol('selectUser');

export type User = { userId: number, name: string }

interface SelectUserActions extends ActionMap {
    fetchAllUsers: null;
    setAllUsers: (users: User[]) => ({ payload: { users: User[] }});
    changeUser: (userId: number) => ({ payload: number });
    dummy: null;
}

export type SelectUserState = {
  allUsers: User[],
  selected: User | null,
}

export const modules = createModule(SelectUserSymbol)
  .withActions<SelectUserActions>({
      fetchAllUsers: null,
      setAllUsers: users => ({ payload: { users } }),
      changeUser: userId => ({ payload: userId }),
      dummy: null,
      $mounted: null,
  })
  .withState<SelectUserState>();

export const useModule: HandleWithState<SelectUserState> = modules[0];
export const SelectUserActions: ConvertActions<SelectUserActions> = modules[1];
export const getSelectUserState: StateGetter<SelectUserState> = modules[2];
