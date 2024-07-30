import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthCallback from "./pages/auth/callback/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "auth",
    element: <AuthCallback/>,
  },
]);

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
