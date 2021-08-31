import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should show hello world", () => {
    // arrange
    render(<App />);

    // act
    const title = screen.getByTestId("title");

    // assert
    expect(title).toHaveTextContent(/hello world!/i);
  });
});
