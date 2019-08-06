import * as React from 'react';
import * as Rx from 'typeless/rx';
import { {{pascalCase name}}Actions, {{pascalCase name}}State, useModule } from './interface';
import { {{pascalCase name}} } from './components/{{pascalCase name}}';


useModule
  .epic()
  .on({{pascalCase name}}Actions.startCount, () =>
    Rx.of({{pascalCase name}}Actions.countDone(1)).pipe(Rx.delay(500))
  );

const initialState: {{pascalCase name}}State = {
  isLoading: false,
  count: 0,
};


useModule
  .reducer(initialState)
  .on({{pascalCase name}}Actions.startCount, state => {
    state.isLoading = true;
  })
  .on({{pascalCase name}}Actions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });


export const {{pascalCase name}}Module = () => {

  useModule();

  return <{{pascalCase name}} />;
}
