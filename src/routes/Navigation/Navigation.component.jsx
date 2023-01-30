import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/mainLogo.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container " to="/">
          <div>
            <Logo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop">Shop</Link>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;
