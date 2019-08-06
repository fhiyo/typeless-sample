import { createModule } from 'typeless';
import { SampleSymbol } from "./symbol";

export const [useModule, SampleActions, getSampleState] = createModule(SampleSymbol)
  .withActions({
    startInc: null,
    startDec: null,
    countDone: (count: number) => ({ payload: { count } }),
  })
  .withState<SampleState>();

export interface SampleState {
  isLoading: boolean;
  count: number;
}