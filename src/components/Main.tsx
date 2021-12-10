import React from "react";
import MainCard from "./MainCard";
function Main() {
  return (
    <div className="container-lg ">
      <div className="row">
        <div className="col ">
          <MainCard link="/apod"  title="ASTRONOMY PICTURE OF THE DAY" cardText="text something we have to wirte"/>
        </div>
        <div className="col ">
          {/* <MainCard /> */}
        </div> 
        <div className="col ">
          {/* <MainCard /> */}
        </div>
        <div className="col ">
          {/* <MainCard /> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
