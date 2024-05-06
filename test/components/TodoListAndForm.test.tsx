import { render } from "@testing-library/react";
import { TodoListAndFrom } from "../../src/components/TodoListAndForm";
import { Todo } from "../../src/models/todo";

const mockTodoData: Todo[] = [{
  name: "Do something.",
  details: "Need to do something.",
},
{
  name: "Do something next",
  details: "Need to do something next",
}];

describe("TodoListAndForm component", () => {
  test("renders component", () => {
    const result = render(<TodoListAndFrom todos={mockTodoData} />);
    expect(result).toMatchSnapshot();
  });

  test("renders ToDoList from mockData", () => {
    const component = render(<TodoListAndFrom todos={mockTodoData} />);

    expect(component.queryAllByRole("listitem").length).toBe(2);
    expect(component.findByText("Do something.")).toBeTruthy();
    expect(component.findByText("Need to do something.")).toBeTruthy();
    expect(component.findByText("Do something next")).toBeTruthy();
    expect(component.findByText("Need to do something next")).toBeTruthy();

  })
});