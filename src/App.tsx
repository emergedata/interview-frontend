import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllTodos } from "./pages/AllTodos";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AllTodos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
