import { NavBar, ScrollToTop } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ScrollToTop />
    </>
  );
}

export default App;
