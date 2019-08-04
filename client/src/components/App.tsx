import * as React from 'react';
import { DefaultTypelessProvider } from 'typeless';
import { SampleModule } from '../modules/sample/module';
import { SelectUserModule } from '../modules/selectUser/module'

export const AllContents: React.StatelessComponent = () => {
  return (
    <div>
        <SampleModule />
        <SelectUserModule />
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
