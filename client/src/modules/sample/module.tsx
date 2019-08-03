import * as React from 'react';
import * as Rx from 'typeless/rx';
import { SampleActions, SampleState, useModule } from './interface';
import { Sample } from './components/Sample';


useModule
  .epic()
  .on(SampleActions.startCount, () =>
    Rx.of(SampleActions.countDone(1)).pipe(Rx.delay(500))
  );

const initialState: SampleState = {
  isLoading: false,
  count: 0,
};


useModule
  .reducer(initialState)
  .on(SampleActions.startCount, state => {
    state.isLoading = true;
  })
  .on(SampleActions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });


export const SampleModule = () => {

  useModule();

  return <Sample />;
}