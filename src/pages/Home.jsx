import AdminDb from "../components/Dashboard/AdminDb";
import EmployeeDb from "../components/Dashboard/EmployeeDb";
import Header from "../components/others/Header";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { user } = useAuth();

  if (!user) return <> <Link to="/login">Please login</Link></>;
  <Header />
  
  return (
    <>
    <ToastContainer />
    {user.role === "admin" && <AdminDb />}
    {user.role === "employee" && <EmployeeDb />}
    </>
  );
};

export default Home;
