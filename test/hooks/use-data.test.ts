import { vi } from "vitest";
import { Todo } from "../../src/models/todo";
import { cleanup, renderHook } from "@testing-library/react";
import { useData } from "../../src/hooks/use-data";

describe("useData hook test", () => {
  afterEach(cleanup);

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mock("../../src/utils/data", () => ({
      getTodos: vi.fn().mockReturnValue([
        { name: "test todo 1", details: "test details 1" } as Todo,
        { name: "test todo 2", details: "test details 2" } as Todo,
      ]),
      addListener: vi.fn().mockImplementation((cb) => {
        const unsub = () => {};
        cb([
          { name: "test todo 1", details: "test details 1" } as Todo,
          { name: "test todo 2", details: "test details 2" } as Todo,
        ]);
        return unsub;
      }),
    }));
  });

  test("useData hook returns initial data correctly", () => {
    const { result } = renderHook(() => useData());
    expect(result.current).toHaveLength(2);
    expect(result.current[0]).toMatchObject({ name: "test todo 1", details: "test details 1" });
    expect(result.current[1]).toMatchObject({ name: "test todo 2", details: "test details 2" });
  });
});
