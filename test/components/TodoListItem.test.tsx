import { render } from "@testing-library/react";
import { TodoListItem } from "../../src/components/TodoListItem";
import { test, expect, describe } from "vitest";

const mockTodoData = {
  name: "Do something.",
  details: "Need to do something.",
};

describe("TodoListItem component", () => {
  test("renders component", () => {
    const result = render(<TodoListItem todo={mockTodoData} />);
    expect(result).toMatchSnapshot();
  });

  test("renders todo list item with name and details", () => {
    // Render the component with dummy mock todo data
    const screen = render(<TodoListItem todo={mockTodoData} />);

    expect(screen.findByText(mockTodoData.name)).toBeTruthy();
    expect(screen.findByText(mockTodoData.details)).toBeTruthy();
  });
});
