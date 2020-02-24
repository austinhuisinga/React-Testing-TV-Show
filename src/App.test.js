import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

// jest.mock('./api/fetchShow');

describe('App', () => {
  let wrapper;

  afterEach(rtl.cleanup);
  beforeEach(() => {
    wrapper = rtl.render(<App />);
  });

  it('app component displays', async () => {
    const text = await wrapper.findByText('Select a season');
    expect(text).toBeInTheDocument()
  })
});

// import React from "react";
// import * as rtl from "@testing-library/react";
// import App from "./App";

// describe("App", () => {
//   let wrapper;

//   afterEach(rtl.cleanup);
//   beforeEach(() => {
//     wrapper = rtl.render(<App />);
//   });

//   it('expect the app component to display', async () => {
//       const text = await wrapper.findByText('Select a season');
//       expect(text).toBeInTheDocument()
//   })
// }); 