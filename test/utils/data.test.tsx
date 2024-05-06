import { vi } from "vitest";
import { Todo } from "../../src/models/todo";
import { getTodos, addTodo } from "../../src/utils/data";

beforeEach(() => {
  vi.clearAllMocks();
  vi.mock("../../src/data/todos.json", () => {
    return {
      default: [
        { name: "Test todo 1", details: "Test details 1" } as Todo,
        { name: "Test todo 2", details: "Test details 2" } as Todo,
      ],
    };
  });
});


describe("getTodos test", () => {
  test("getTodos correctly returns the correct data", () => {
    const result = getTodos();

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({ name: "Test todo 1", details: "Test details 1",});
    expect(result[1]).toMatchObject({ name: "Test todo 2", details: "Test details 2",});
  });
});


describe("addTodo test", () => {
  test("addTodo correctly adds a todo to the mock data", () => {
    const testTodo = { name: "Test todo 3", details: "Test details 3" };
    expect(getTodos()).length(2); // before adding a todo, see it gets current from mock

    addTodo(testTodo); // add a todo
    const result = getTodos();
    
    expect(result).length(3);
    expect(result[0]).toMatchObject({ name: "Test todo 1", details: "Test details 1",});
    expect(result[1]).toMatchObject({ name: "Test todo 2", details: "Test details 2",});
    expect(result[2]).toMatchObject({ name: "Test todo 3", details: "Test details 3",});
  })
});