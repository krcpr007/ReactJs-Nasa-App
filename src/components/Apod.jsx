import React from "react";
import { useState, useEffect } from "react";
function Apod() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=YDOaObbxjGIed4g5Zk9YdRLvBDPzUnGNjBW3lV7N`
    )
      .then((res) => res.json())
      .then((resp) => setData(resp));
  }, []);
  return (
    <div className="container-lg">
        <h1 className="text-center">ASTRONOMY PICTURE OF THE DAY</h1>
      <div className="card" style={{}}>
        <img
          src={data.hdurl}
          className="card-img-top"
          alt="ASTRONOMY OF THE DAY"
        />
        <div className="card-body">
          <h2>{data.title}</h2> 
          <footer className="blockquote-footer mt-1 text-right">{data.date}</footer>
          <a className="btn btn-sm btn-dark m-2" href={data.hdurl} target="_blank" rel="noreferrer">Download</a>
          <h4>Explanation</h4>
          <p style={{textAlign:"justify"}} className="card-text">{data.explanation}</p>
          <footer className="blockquote-footer"> {data.copyright}</footer>
        </div>
      </div>
    </div>
  );
}

export default Apod;
