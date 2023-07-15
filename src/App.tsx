import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { ReactNode, useEffect } from "react";
import Error from "./pages/Error";
import { products } from "./data/ExampleProducts";

interface IChildren {
  children?: ReactNode | undefined;
}

const RouteControl: React.FC<IChildren> = ({ children }) => {
  if (localStorage.getItem("user")) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

const AdminControl: React.FC<IChildren> = ({ children }) => {
  let data = localStorage.getItem("user");
  let user = data ? JSON.parse(data) : null;

  if (user.username === "admin" && user.password === "admin") {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/homepage"
          element={
            <RouteControl>
              <Homepage />
            </RouteControl>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminControl>
              <Dashboard />
            </AdminControl>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
