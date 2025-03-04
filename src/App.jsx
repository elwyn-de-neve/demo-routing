import "./App.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Login from "./pages/Login.jsx";
import ProductOverviewPage from "./pages/ProductOverviewPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <main className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductOverviewPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route
            path="/profile"
            element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} isAuth={isAuth} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
