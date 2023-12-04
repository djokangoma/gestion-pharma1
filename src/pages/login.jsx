import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/home");
  };
  const handleclickadmin = () => {
    navigate("/all-products");
  };
  return (
    <>
      <h1>login page</h1>
      <button onClick={handleclick}>connexion</button>
      <button onClick={handleclickadmin}>Adminstrator account </button>
    </>
  );
}
export default Login;
