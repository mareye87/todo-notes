import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import DeletePage from "./pages/DeletePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/create" element={<CreatePage />} />
      <Route path="/todo/edit/:id" element={<EditPage />} />
      <Route path="/todo/delete/:id" element={<DeletePage />} />
    </Routes>
  );
};

export default App;
