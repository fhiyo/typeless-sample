import * as React from 'react';
import { useActions } from 'typeless';
import { SampleActions, getSampleState } from '../interface';
import { Button, Spinner } from "react-bootstrap";

export const Sample = () => {
  const { startInc: startInc, startDec: startDec } = useActions(SampleActions);
  const { isLoading, count } = getSampleState.useState();
  const loadingSpinner = <Spinner animation="border" size="sm" />;

  return (
    <div>
      <Button disabled={isLoading} onClick={startInc}>
          {isLoading ? loadingSpinner : 'increment'}
      </Button>
      <Button disabled={isLoading} onClick={startDec}>
          {isLoading ? loadingSpinner : 'decrement'}
      </Button>
      <div data-testid="state"> count: {count}</div>
    </div>
  );
}