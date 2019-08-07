import * as React from 'react';
import { useActions } from "typeless";
import * as Rx from 'typeless/rx';
import { SampleActions, SampleState, useModule, getSampleState } from './interface';
import { Sample } from './components/Sample';
import { countService } from "../../service/CounterServer";

useModule
  .epic()
  .on(SampleActions.startInc, () => {
    const randInt = Math.floor(Math.random() * Math.floor(10));
    return countService
      .fetchSuccNumber(randInt)
      .pipe(Rx.map((num: number) => SampleActions.countDone(num)))
      .pipe(Rx.delay(100))
  })
  .on(SampleActions.startDec, () => {
    const randNegInt = -Math.floor(Math.random() * Math.floor(10));
    return Rx.of(SampleActions.countDone(randNegInt))
      .pipe(Rx.delay(50))
  })
  .on(SampleActions.countDone, (payload: {count: number}) => {
      alert(`call countDone, count: ${payload.count}`);
      return Rx.empty();
  })
  .on(SampleActions.countZeroAlert, () => {
      alert('current count state is 0!')
      return Rx.empty();
    });

const initialState: SampleState = {
  isLoading: false,
  count: 0,
};

useModule
  .reducer(initialState)
  .on(SampleActions.startInc, state => {
    state.isLoading = true;
  })
  .on(SampleActions.startDec, state => {
      state.isLoading = true;
  })
  .on(SampleActions.countDone, (state, { count }) => {
    state.isLoading = false;
    state.count += count;
  });


export const SampleModule = () => {

  useModule();
  const { countZeroAlert } = useActions(SampleActions);
  const { count } = getSampleState.useState();
  // あるいは、countZeroAlertの中で分岐をさせるとか？inc, decの度に毎回走らせれば(Rx.mergeMapとかで)いけそう。
  if (count === 0) countZeroAlert();

  return <Sample />;
}