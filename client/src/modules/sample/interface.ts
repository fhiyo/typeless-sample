import { createModule } from 'typeless';

export const SampleSymbol = Symbol('sample');

export const [useModule, SampleActions, getSampleState] = createModule(SampleSymbol)
  .withActions({
    startCount: null,
    countDone: (count: number) => ({ payload: { count } }),
  })
  .withState<SampleState>();

export interface SampleState {
  isLoading: boolean;
  count: number;
}