import React from 'react'

const CustomFooter = () => {
  return (
    <footer class="bg-dark text-light p-5">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Contact Us</h5>
          <p>123 Travel Street<br />City, Country</p>
          <p>Email: info@example.com</p>
        </div>
        <div class="col-md-4">
          <h5>Quick Links</h5>
          <ul class="list-unstyled text-light">
            <li>
              <a class="text-light text-decoration-none" href="#">Home</a>
            </li>
            <li>
              <a class="text-light text-decoration-none" href="#">Hotels</a>
            </li>
            <li>
              <a class="text-light text-decoration-none" href="#">Tours</a>
            </li>
            <li>
              <a class="text-light text-decoration-none" href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Connect With Us</h5>
          <a class="m-3" href="#"><i class="fa fa-facebook"></i></a>
          <a class="m-3" href="#"><i class="fa fa-twitter"></i></a>
          <a class="m-3" href="#"><i class="fa fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default CustomFooter