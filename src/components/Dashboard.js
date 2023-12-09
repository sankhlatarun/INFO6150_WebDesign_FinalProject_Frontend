import React from 'react'
import slider1 from '../assets/DashboardImages/slider (1).jpg'
import slider2 from '../assets/DashboardImages/slider (2).jpg'
import slider3 from '../assets/DashboardImages/slider (3).jpg'
import services from '../assets/DashboardImages/Services.jpg'
import test1 from '../assets/DashboardImages/test1.png'
import test2 from '../assets/DashboardImages/test2.png'
import test3 from '../assets/DashboardImages/test3.png'
import test4 from '../assets/DashboardImages/test4.png'
import '../assets/CSS/DashboardStyle.css'


export default function Dashboard() {
  return (
    <div>
      
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators" >
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>Search Your Dream Destination</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>Awesome Location</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h5>Best Location in London</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <!-- about Section --> */}
      <section id="about" className="about section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="about-img">
                        <img src={services} alt="..." className="img-fluid"/>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
                    <div className="about-text">
                        <h2>We provide best Quality <br/> Services Ever </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga cumque, modi ipsa libero necessitatibus
                             molestiae repudiandae accusamus dicta consequatur enim magni fugiat ab. Amet nesciunt incidunt fugit
                             corporis!
                            </p>
                            <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
      </section>
        {/* <!-- Services Section  --> */}

        <section className="services section-padding" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center pb-5">
                            <h2>Our Services</h2>
                            <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Maxime, culpa!</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-white text-center bg-dark pb-2">
                            <div className="card-body">
                                <i className="bi bi-airplane-engines"></i>
                                <h3 className="card-title"><span className="text-warning">Best</span> Prices</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla et odit mollitia quisquam officiis ullam iste quo tenetur
                                     recusandae! Cum ab doloribus asperiores dolore nam assumenda molestias exercitationem suscipit aut quaerat, quos ut nihil. Cum ullam deleniti
                                     </p>
                                     <button className="btn btn-warning text-dark">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-white text-center bg-dark pb-2">
                            <div className="card-body">
                                <i className="bi bi-emoji-heart-eyes"></i>
                                <h3 className="card-title"><span className="text-warning">Best</span> Experience</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla et odit mollitia quisquam officiis ullam iste quo tenetur
                                     recusandae! Cum ab doloribus asperiores dolore nam assumenda molestias exercitationem suscipit aut quaerat, quos ut nihil. Cum ullam deleniti
                                     </p>
                                     <button className="btn btn-warning text-dark">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <div className="card text-white text-center bg-dark pb-2">
                            <div className="card-body">
                                <i className="bi bi-balloon-heart"></i>
                                <h3 className="card-title"><span className="text-warning">Best</span> Memories</h3>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nulla et odit mollitia quisquam officiis ullam iste quo tenetur
                                     recusandae! Cum ab doloribus asperiores dolore nam assumenda molestias exercitationem suscipit aut quaerat, quos ut nihil. Cum ullam deleniti
                                     </p>
                                     <button className="btn btn-warning text-dark">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="team" className="team section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="section-header text-center pb-5">
                      <h2>Our Team</h2>
                      <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Maxime, culpa!</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="clo-12 col-md-6 col-lg-3">
                  <div className="card text-center">
                    <img src={test1} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Jack Denials</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas?</p>
                    <p className="socials">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                      <i className="bi bi-facebook text-dark mx-1"></i>
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </p>
                  </div>
                </div>
                <div className="clo-12 col-md-6 col-lg-3">
                  <div className="card text-center">
                    <img src={test2} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Harry Potter</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas?</p>
                    <p className="socials">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                      <i className="bi bi-facebook text-dark mx-1"></i>
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </p>
                  </div>
                </div>
                <div className="clo-12 col-md-6 col-lg-3">
                  <div className="card text-center">
                    <img src={test3} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Thomas Cook</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas?</p>
                    <p className="socials">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                      <i className="bi bi-facebook text-dark mx-1"></i>
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </p>
                  </div>
                </div>
                <div className="clo-12 col-md-6 col-lg-3">
                  <div className="card text-center">
                    <img src={test4} alt="" className="img-fluid rounded-circle"/>
                    <h3 className="card-title py-2">Shizuka Minamoto</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quas?</p>
                    <p className="socials">
                      <i className="bi bi-twitter text-dark mx-1"></i>
                      <i className="bi bi-facebook text-dark mx-1"></i>
                      <i className="bi bi-linkedin text-dark mx-1"></i>
                      <i className="bi bi-instagram text-dark mx-1"></i>
                    </p>
                  </div>
                </div>
              
          </div>
          </div>
        </section>
        {/* <!-- contact Section --> */}
        <section id="contact" className="contact section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                  <div className="section-header text-center pb-5">
                      <h2>Contact Us</h2>
                      <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Maxime, culpa!</p>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-md-12 p 0 pt-4 pb-4 ">
                  <form action="#" className="bg-light p-4 ms-auto">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <input type="text" className="form-control" required placeholder="Your Full Name"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <input type="email" className="form-control" required placeholder="Your Email Address"/>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <textarea name="" rows="3" required className="form-control" placeholder="Your Query Please"></textarea>
                        </div>
                      </div>
                      <button className="btn btn-warning btn-lg btn-block mt-3">
                        Send Now 
                      </button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </section>

    </div>
  )
}