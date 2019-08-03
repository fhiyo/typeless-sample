import * as React from 'react';
import { useActions } from 'typeless';
import { SampleActions, getSampleState } from '../interface';

export const Sample = () => {
  const { startCount } = useActions(SampleActions);
  const { isLoading, count } = getSampleState.useState();

  return (
    <div>
      <button disabled={isLoading} onClick={startCount}>
        {isLoading ? 'loading...' : 'increase'}
      </button>
      <div data-testid="state"> count: {count}</div>
    </div>
  );
}