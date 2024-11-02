// ******************** FIRE EVENTS ********************

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders App component", () => {
    render(<App />);

    screen.debug();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    });

    screen.debug();
  });
});

// ****************** ASYNCHRONOUS ********************

// import * as React from "react";
// import { render, screen } from "@testing-library/react";
// import App from "./App";

// describe("App", () => {
//   it("renders App component", async () => {
//     render(<App />);

//     expect(screen.queryByText(/Signed in as/)).toBeNull();

//     expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
//   });
// });

// **************** SYNCHRONOUS ******************

// import * as React from 'react';
// import { render, screen } from '@testing-library/react';

// import App from './App';

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);

//     screen.debug();
//   });
// });
