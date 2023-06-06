import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login.tsx";
import Home from "../pages/Home.tsx";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
