import Home from "./screens/home/Home";
import Login from "./screens/login/login";
import store from "./app/store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./screens/ErrorPage";
import { Toaster } from "react-hot-toast";
// import routes from "./routes/routes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Toaster />
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
