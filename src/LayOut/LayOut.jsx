import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
import Footer from "../Components/Footer/Footer";

const LayOut = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LayOut;
