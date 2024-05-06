import { render } from "@testing-library/react";
import { TodoListAndFrom } from "../../src/components/TodoListAndForm";
import { Todo } from "../../src/models/todo";
import { TodoStack } from "../../src/components/TodoStack";
import { test, expect, describe } from "vitest";

const mockTodoData: Todo[] = [{
  name: "Do something.",
  details: "Need to do something.",
},
{
  name: "Do something next",
  details: "Need to do something next",
}];

describe("TodoStack component", () => {
  test("renders component", () => {
    const result = render(<TodoListAndFrom todos={mockTodoData} />);
    expect(result).toMatchSnapshot();
  });

  test("allows users to add a new todo", async () => {
    const component = render(<TodoStack todos={mockTodoData} />);

    // Assert that each todo item is rendered
    
    expect(component.queryAllByRole("listitem").length).toBe(2);
    expect(component.findByText("Do something.")).toBeTruthy();
    expect(component.findByText("Need to do something.")).toBeTruthy();
    expect(component.findByText("Do something next")).toBeTruthy();
    expect(component.findByText("Need to do something next")).toBeTruthy();
  });
});
