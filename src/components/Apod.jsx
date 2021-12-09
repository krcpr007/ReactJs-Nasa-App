import React from "react";
import { useState, useEffect } from "react";
function Apod() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="container-lg">
        <h1 className="text-center">ASTRONOMY PICTURE OF THE DAY</h1>
      <div class="card" style={{}}>
        <img
          src={data.hdurl}
          class="card-img-top"
          alt="ASTRONOMY OF THE DAY"
        />
        <div class="card-body">
          <h2>A Total Eclipse of the Sun</h2> 
          <footer class="blockquote-footer mt-1 text-right">{data.date}</footer>
          <a className="btn btn-sm btn-dark" href={data.hdurl} target="_blank" rel="noreferrer">Download</a>
          <h3>Explanation</h3>
          <p style={{textAlign:"justify"}} class="card-text">{data.explanation}</p>
          <footer className="blockquote-footer"> {data.copyright}</footer>
        </div>
      </div>
    </div>
  );
}

export default Apod;
