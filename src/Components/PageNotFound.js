import React from "react";
import "../css/notfound.css";

const PageNotFound = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
        <h2 className="Title mt-5">404</h2>
        </div>
      <div className="subTitle">
        <h4 style={{fontWeight: "bold"}}>Page Not Found!</h4>
      </div>
      <div>
        <p className="content pt-3">
          We're sorry, but we can't find the page you were looking for. It's
          probably some thing we've done wrong but now we know about it <br />{" "}
          and we'll try to fix it. In the meantime, try one of these options:
        </p>
      </div>

      <div className="text-center">
        <a className="GotoBtn" href="/">
          <span>&#10149;</span> Go to Homepage
        </a>
      </div>
      </div>
    </>
  );
};

export default PageNotFound;
