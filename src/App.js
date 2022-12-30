import { RouterProvider } from "react-router-dom";
import { Router } from "./Routes/Routes";

function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
