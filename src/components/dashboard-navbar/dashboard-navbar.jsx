function DashboardNavbar() {
  return (
    <ul>
      <li>
        <NavLink to="/all-products">All-products</NavLink>
      </li>
      <li>
        <NavLink to="/create-products">Create-products</NavLink>
      </li>
      <li>
        <NavLink to="/update-product">Update-product</NavLink>
      </li>
      <li>
        <NavLink to="/delete-product">Delete-product</NavLink>
      </li>
      <li>
        <NavLink to="/">Deconnexion</NavLink>
      </li>
    </ul>
  );
}
export default DashboardNavbar;
