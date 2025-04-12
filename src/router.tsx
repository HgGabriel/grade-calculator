import { BrowserRouter as Router, Routes, Route } from "react-router";
import DefaultLayout from "./Layout/DefaultLayout";
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route  element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;