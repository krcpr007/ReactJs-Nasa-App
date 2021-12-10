import React from "react";
import {Link} from 'react-router-dom'
interface cardDetails {
  title: string;
  cardText: string;
  link:string; 
}
function MainCard(props:cardDetails) {
  return (
    <div className="card mx-4 my-3" style={{ width: "15rem" }}>
      <img
        src="https://source.unsplash.com/1600x900/daily?astronomy,earth"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          Here you can see Astronomy Picture of the Day (APOD).
          Its means the picture taken by nasa of our universe by today
        </p>
        <Link to={props.link} className="btn btn-primary">
          See picture
        </Link>
      </div>
    </div>
  );
}

export default MainCard;
