import "./imagesLoader.css";
import { FaCamera } from "react-icons/fa";

function Loader() {
  return (
    <div className="loader">

      {/* Camera Flash */}
      <div className="flash"></div>

      {/* Loader Content */}
      <div className="loader-content">

        <FaCamera className="camera"/>

        <h1>
          THROUGH MY <span>PHONE</span> LENS
        </h1>

        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </div>
  );
}

export default Loader;