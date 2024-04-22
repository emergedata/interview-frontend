import { render, screen } from "@testing-library/react";
import { AllTodos } from "../AllTodos";

test("1 + 1 = 2", () => {
  let result = 1 + 1;

  expect(result).toEqual(2);
});

test("renders component", () => {
  render(<AllTodos />);

  screen.getByText(/Add a todo/);
});
