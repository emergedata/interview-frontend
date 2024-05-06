import { render, screen, fireEvent } from "@testing-library/react";
import { NewTodoForm } from "../../src/components/NewTodoForm";
import { test, expect, describe } from "vitest";

describe("NewTodoForm component", () => {
  test("renders NewTodoForm component", () => {
    const result = render(<NewTodoForm />);
    expect(result).toMatchSnapshot();
  });

  test("clears state of input upon submission", async () => {
    render(<NewTodoForm />);

    const nameFieldInputValue = screen.getByLabelText("Name") as HTMLInputElement;
    const detailFieldInputValue = screen.getByLabelText("Description") as HTMLInputElement;
    const addButton = screen.getByText("Add");

    // Simulate user input
    fireEvent.change(nameFieldInputValue, { target: { value: "Test Todo" } });
    fireEvent.change(detailFieldInputValue, { target: { value: "Test Description" } });

    // Simulate form submission, click on add button
    fireEvent.click(addButton);

    // Verify that input fields have been cleared after submission
    expect(nameFieldInputValue.value).toBe("");
    expect(detailFieldInputValue.value).toBe("");
  });
});
