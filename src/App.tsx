// layouts
import RootLayout from "./layouts/RootLayout";
import AccountPage from "./main-components/AccountPage";
// Components
import Menu from "./main-components/Menu";
import Middle from "./main-components/Middle";

// Routing
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Middle />} />
      <Route path="menu" element={<Menu />} />
      <Route path="account" element={<AccountPage />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
