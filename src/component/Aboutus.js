import React from "react";
// import about from "../../public/skills.png";


function Aboutus() {
  return (
    <div className='container p-4 fs-5 bg-success text-white'>
          <section id="about" className="about">
      <div className="container " data-aos="fade-up">

        <div className="section-title text-center mb-3 fw-bold ">
          <h1 className="text-dark p-2 bg-info mt-1 rounded-pill">ABOUT US</h1>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
            A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. 
            </p>
            <ul className="fs-6">
              <li><i className="ri-check-double-line"></i> Program a browser like using JavaScript, jQuery, Angular, or Vue</li>
              <li><i className="ri-check-double-line"></i> Program a server like using PHP, ASP, Python, or Node</li>
              <li><i className="ri-check-double-line"></i> Program a database like using SQL, SQLite, or MongoDB</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            The front end the parts of a website a user sees and interacts with and the back end (the behind-the-scenes data storage and processing) require different skill sets.
             </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>

      </div>
    </section>
    {/* //!-- End About Us Section -- */}
    {/* //!-- ======= Skills Section ======= -- */}
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
           
            <img src="./skills.png" className="img-fluid" alt="gjkj" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content fs-6 " data-aos="fade-left" data-aos-delay="100">
            <h3>The Popular Stacks</h3>
            <ul>
              <li><i className="ri-check-double-line"></i> LAMP stack: JavaScript - Linux - Apache - MySQL - PHP</li>
              <li><i className="ri-check-double-line"></i> LEMP stack: JavaScript - Linux - Nginx - MySQL - PHP</li>
              <li><i className="ri-check-double-line"></i> MEAN stack: JavaScript - MongoDB - Express - AngularJS - Node.js</li>
              <li><i className="ri-check-double-line"></i> MERN stack: JavaScript - MongoDB - Express - ReactJS - Node.js</li>
              <li><i className="ri-check-double-line"></i> Django stack: JavaScript - Python - Django - MySQL</li>
              <li><i className="ri-check-double-line"></i> Ruby on Rails: JavaScript - Ruby - SQLite - Rails</li>
            </ul>

          </div>
        </div>

      </div>
    </section>
    {/* //!-- End Skills Section -- */}


      
 </div>
     
  );
}

export default Aboutus;