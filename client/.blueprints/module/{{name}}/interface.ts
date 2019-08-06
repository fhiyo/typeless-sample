import { createModule } from 'typeless';
import { {{pascalCase name}}Symbol } from './symbol'

export const [useModule, {{pascalCase name}}Actions, get{{pascalCase name}}State] = createModule({{pascalCase name}}Symbol)
  .withActions({
    startCount: null,
    countDone: (count: number) => ({ payload: { count } }),
  })
  .withState<{{pascalCase name}}State>();

export interface {{pascalCase name}}State {
  isLoading: boolean;
  count: number;
}
