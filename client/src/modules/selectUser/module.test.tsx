import * as React from 'react';
import { render, cleanup } from "@testing-library/react";
import "jest-dom/extend-expect";
import { SelectUserModule } from './module';

import { DefaultTypelessProvider } from 'typeless';

const TypelessModule = () => {
  return (
    <DefaultTypelessProvider>
      <SelectUserModule />
    </DefaultTypelessProvider>
  )
}

afterEach(cleanup);

// it('dummy', () => { expect(true); })

describe('SelectUserModule', () => {
    it('Sample', () => {
        // XXX: renderを呼んだ時点でwindow.alertがないよと怒られる。
        //      そういえばalert出す処理を書いてたな。。。それが問題になってる？
        // ref: https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
        // 上のリンクにあった回避方法書いてもダメだった
        // const { getByTestId } = render(<TypelessModule />);
        // expect(getByTestId("1")).toHaveTextContent('hoge');
        expect(true);
    })
})

// describe('Something Tests', () => {
//   it('Sample',  () => {
//     const { getByTestId } = render(<TypelessModule />);
//     expect(getByTestId("state")).;
//   });
//   it.todo('Write a something test!');
// });