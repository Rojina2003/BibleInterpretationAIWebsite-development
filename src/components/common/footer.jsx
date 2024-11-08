import { Outlet, Link, useLocation } from "react-router-dom";
import { Dot } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <Outlet />
      <div className="text-[#EA9DA1] pb-4 flex py-5 items-center justify-between">
        <div>
          <p>Powered by</p>
          <Link
            to="https://frabrahamfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Fr. Abraham Mutholath Foundation NFP
          </Link>
        </div>
        <p className="lg:flex grid text-right gap-2">
          <Link
            to="/about-us"
            className={`underline underline-offset-4 ${
              currentPath === "/about-us" ? "text-white" : ""
            }`}
          >
            About us
          </Link>
          <Dot className="text-white lg:flex hidden" />
          <Link
            to="/terms-and-conditions"
            className={`underline underline-offset-4 ${
              currentPath === "/terms-and-conditions" ? "text-white" : ""
            }`}
          >
            Terms & Conditions
          </Link>
          <Dot className="text-white lg:flex hidden" />
          <Link
            to="/privacy-policy"
            className={`underline underline-offset-4 ${
              currentPath === "/privacy-policy" ? "text-white" : ""
            }`}
          >
            Privacy policies
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
