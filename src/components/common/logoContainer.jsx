import { Link } from "react-router-dom"
import bibleIcon from "../../assets/bible-logo.png";


// eslint-disable-next-line react/prop-types
const LogoContainer = ({description}) => {
  return (
    <div className="font-albert-sans space-y-6 text-white max-w-[629px] ">
          <Link to="/">
            <img
              style={{ width: "150px", marginBottom: "20px" }}
              src={bibleIcon}
              alt="Bible Logo"
            />
          </Link>
          <h1 className="font-bold text-3xl lg:text-4xl ">Join the Journey of Faith and Understanding</h1>
          <p className="lg:text-lg text-sm text-[#EA9DA1] ">
            {description}
          </p>
        </div>
  )
}

export default LogoContainer