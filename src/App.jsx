
import Button from "@mui/material/Button"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
//import './App.css'
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import { store } from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/login" index element={<Login />} />
  </Route>
  )
);
function App() {
  return <Provider store={store}>
  <RouterProvider router={router} />;
  </Provider>
}

export default App
