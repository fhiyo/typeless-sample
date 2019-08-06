import * as React from 'react';
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import { UserDetailModule } from './module';

import { DefaultTypelessProvider } from 'typeless';

const TypelessModule = () => {
  return (
    <DefaultTypelessProvider>
      <UserDetailModule />
    </DefaultTypelessProvider>
  )
}

afterEach(cleanup);

describe('Something Tests', () => {
  it('Sample',  () => {
    const { getByTestId } = render(<TypelessModule />);
    expect(getByTestId("state")).toHaveTextContent("0");
  });
  it.todo('Write a something test!');
});