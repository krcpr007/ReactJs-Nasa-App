import React from "react";
import { useState, useEffect } from "react";
function Mars() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YDOaObbxjGIed4g5Zk9YdRLvBDPzUnGNjBW3lV7N`
    )
      .then((res) => res.json())
      .then((resp) => setData(resp.photos[0].img_src));
  }, []);
  return (
    <div className="container-lg bg-dark text-white">
      <h2>PICTURES OF MARS </h2>
      <div className="card bg-dark" style={{ width: "18rem" }}>
        <img src={data} className="card-img-top img-fluid" alt="..." />
        <div className="card-body ">
          <h5 className="card-title">title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mars;
