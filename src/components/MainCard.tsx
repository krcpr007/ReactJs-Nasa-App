import React from "react";
import {Link} from 'react-router-dom'
interface cardDetails {
  imgUrl:string;
  title: string;
  cardText: string;
  link:string; 
  btnText:string;
}
function MainCard(props:cardDetails) {
  return (
    <div className="card mx-4 my-3" style={{ width: "15rem" }}>
      <img
        src={props.imgUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
         {props.cardText}
        </p>
        <Link to={props.link} className="btn btn-primary">
          {props.btnText}
        </Link>
      </div>
    </div>
  );
}

export default MainCard;
