import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
