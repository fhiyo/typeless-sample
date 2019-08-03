import * as React from 'react';
import { DefaultTypelessProvider } from 'typeless';
import { SampleModule } from '../modules/sample/module';
// import { SelectUser } from '../modules/selectUser/components/SelectUser'

export const AllContents: React.StatelessComponent = () => {
  return (
    <div>
        <SampleModule />
        {/* <SelectUser /> */}
    </div>
  );
};

export const App: React.StatelessComponent = () => {
  return (
    <DefaultTypelessProvider>
        <AllContents />
    </DefaultTypelessProvider>
  );
};
