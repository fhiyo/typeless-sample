import { createModule } from 'typeless';

export const SampleSymbol = Symbol('sample');

export const [useModule, SampleActions, getSampleState] = createModule(SampleSymbol)
  .withActions({
    startInc: null,
    startDec: null,
    countDone: (count: number) => ({ payload: { count } }),
    dummy: null,
  })
  .withState<SampleState>();

export interface SampleState {
  isLoading: boolean;
  count: number;
}