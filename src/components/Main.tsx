import React from "react";
import MainCard from "./MainCard";
function Main() {
  return (
    <div className="container-lg ">
      <div className="row">
        <div className="col ">
          <MainCard imgUrl="https://source.unsplash.com/1600x900/daily?astronomy,earth"
            link="/apod"
            title="ASTRONOMY PICTURE OF THE DAY"
            cardText=" Here you can see Astronomy Picture of the Day (APOD).
          Its means the picture taken by nasa of our universe by today" btnText="See pictures"
          />
        </div>
        <div className="col "><MainCard imgUrl="https://source.unsplash.com/1600x900/daily?mars" link="/mars"
            title="SEE THE PICTURES OF MARS"
            cardText=" Here you can see pictures of mars planet taken by nasa " btnText="See pictures" /></div>
        <div className="col ">
          {/* <MainCard /> */}
        </div>
        <div className="col "><MainCard imgUrl="https://source.unsplash.com/1600x900/daily?nasa" link="/about"
            title="ABOUT NASA PICTURES "
            cardText="Know more about this website. How its made , who made it, which api is used for making the react-web-app" btnText="Know more" /></div>
      </div>
    </div>
  );
}

export default Main;
