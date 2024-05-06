import { render } from "@testing-library/react";
import { AllTodos } from "../../src/pages/AllTodos";

test("renders component", () => {

  const result = render(<AllTodos />);
  expect(result).toMatchSnapshot();
});
