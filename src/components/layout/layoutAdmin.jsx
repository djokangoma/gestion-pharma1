import { Outlet } from "react-router-dom";
import DashboardNavbar from "../dashboard-navbar/dashboard-navbar";

function LayoutAdmin() {
  return (
    <>
      <nav>
        <DashboardNavbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default LayoutAdmin;
