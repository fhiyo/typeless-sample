import * as React from 'react';
import { DefaultTypelessProvider } from 'typeless';
import { SampleModule } from '../modules/sample/module';
import { SelectUserModule } from '../modules/selectUser/module'
import { UserDetailModule } from "../modules/userDetail/module";

export const AllContents: React.StatelessComponent = () => {
  return (
    <div>
        <SampleModule />
        <SelectUserModule />
        <hr className="col-xs-12" style={{margin: '40px 0'}} />
        <UserDetailModule />
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
