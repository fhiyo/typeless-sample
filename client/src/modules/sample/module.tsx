import * as React from 'react';
import * as Rx from 'typeless/rx';
import { SampleActions, SampleState, useModule } from './interface';
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
    if(state.count === 0) {
        // XXX: 特定の状態になったときに処理を行うの、ここに書くのが正しい？？
        //      それともreducerは状態の変更以外は行うべきではないからダメ？そうだとすると実現方法は？
        alert('current count state is 0!');
    }
  });


export const SampleModule = () => {

  useModule();

  return <Sample />;
}