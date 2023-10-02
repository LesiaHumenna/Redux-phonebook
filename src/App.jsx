import "./App.css";
import FormAddUser from "./page/FormAddUser";
import ListContacts from "./page/ListContacts";
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import Edit from "./page/Edit";
import Root from "./components/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListContacts />,
        },
        {
          path: "/formAdd",
          element: <FormAddUser />,
        },
        {
          path: "/edit/:id",
          element: <Edit />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
