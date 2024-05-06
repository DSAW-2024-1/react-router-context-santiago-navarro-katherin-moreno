
import React from "react";
import { Home, Overview, Login, Contact } from './pages';
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import { ROUTES } from "./navigation";
import { LoginProvider, useLoginContext } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN.path} element={<Login />} />
          <Route
            path={ROUTES.HOME.path}
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.OVERVIEW.path}
            element={
              <RequireAuth>
                <Overview />
              </RequireAuth>
            }
          />
          <Route
            path={ROUTES.CONTACT.path}
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          />
          <Route path={ROUTES.ERROR_404.path} element={<div>NOT FOUND!!!</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

function RequireAuth({ children }) {
  const { logged } = useLoginContext();

  if (!logged) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default App;