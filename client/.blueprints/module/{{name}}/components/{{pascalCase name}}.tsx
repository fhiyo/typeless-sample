import * as React from 'react';
import { useActions } from 'typeless';
import { {{pascalCase name}}Actions, get{{pascalCase name}}State } from '../interface';

export const {{pascalCase name}} = () => {
  const { startCount } = useActions({{pascalCase name}}Actions);
  const { isLoading, count } = get{{pascalCase name}}State.useState();

  return (
    <div>
      <button disabled={isLoading} onClick={startCount}>
        {isLoading ? 'loading...' : 'increase'}
      </button>
      <div data-testid="state"> count: {count}</div>
    </div>
  );
}
