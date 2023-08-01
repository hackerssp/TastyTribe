import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import SignupPage from "./routes/SignupPage";
import SigninPage from "./routes/SigninPage";
import HomePage from "./routes/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
