import React from "react";

function About() {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="astronomy2.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="astronomy3.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="astronomy1.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>

      <div className="container">
          <h2 className="text-center m-2 p-1 ">Nasa pictures</h2>
        <hr />
        <ul>
            <li>
                <p style={{ textAlign: "justify" }}>
                Welcome to nasa application!! Here we are using
                <a className="text-primary" style={{textDecoration:"none"}} href="https://api.nasa.gov/"> Nasa </a> api to fetch the data. Here
                you can see the pic of the day means what picture is nasa taken today.
                As well as You can see the picture of mars planet.
                </p>
            </li>
            <li>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dignissimos sed eos molestiae placeat obcaecati qui ipsam itaque voluptatum cumque magnam quam ab quisquam commodi exercitationem culpa quibusdam perspiciatis cupiditate!</p>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
