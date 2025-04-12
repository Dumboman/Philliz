<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="Js/Smooth-scoll.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Philliz</title>
</head>
<body>

    <header class="header-menu">
      <div class="logo-container">
        <img src="Pictures/Company-logo.png" class="c-logo" width="100" height="100" alt="Company Logo">
        <div class="logo-cover"></div>
        <div class="logo">Philliz</div>
      </div>
       
        <nav>
          <ul>
            <li><a href="#ap">Home</a></li>
            <li><a href="#review">Reviews</a></li>
            <li><a href="#About-us">About Us</a></li>
            <li class="dropdown">
                <a href="#Services">Services <span class="arrow">▼</span></a>
                <ul class="dropdown-menu">
                    <li><a href="#">Bookkeeping</a></li>
                    <li><a href="#">Tax Preparation</a></li>
                    <li><a href="#">Payroll Management</a></li>
                    <li><a href="#">Financial Reporting</a></li>
                </ul>
                <script src="Js/Dropdown.js"></script>
            </li>
            <li><a href="#contact">Lets Contact</a></li>
        </ul>
    </nav>
        
    </header>
    <img src="Pictures/Accounting-Picture.jpg" class="ap" id="ap" >
    <div class="apword">
        <div class="slideshow-container" id="word-slideshow">HTML</div>
        <script src="Js/Slideshow.js"></script>
       <script src="Js/Ap-scroll.js"></script>
    </div> 
    <div class="quotes-wrapper" id="review" >
        <div class="quote-container">
          <script src="Js/Review.js"></script>
          <img src="Pictures/Open_inverted.png" alt="Open Quote">
          <div class="quote-content">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p>Philliz is fast and responsive <br> it makes starting a company<br> in Singapore a very smooth process<br> - Mr Tan</p>
          </div>
          <img src="Pictures/Close_inverted.png" alt="Close Quote" >
        </div>
      
        <div class="quote-container" id="quote-container">
          <img src="Pictures/Open_inverted.png" alt="Open Quote">
          <div class="quote-content">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p>Great customer service!<br> Highly recommend Philliz<br> for business registration.<br> - Ms Lee</p>
          </div>
          <img src="Pictures/Close_inverted.png" alt="Close Quote">
        </div>
      
        <div class="quote-container">
          <img src="Pictures/Open_inverted.png" alt="Open Quote">
          <div class="quote-content">
            <div class="stars">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p>Super efficient and professional.<br> Philliz made everything easy.<br> I highly recommend them.<br> - Mr Wong</p>
          </div>
          <img src="Pictures/Close_inverted.png" alt="Close Quote">
        </div>
      </div>
      <section class="About-us" id="About-us">
        <div class="About-us-container">
            <div class="hero-image">
                <img src="hero-image.png" alt="Person working on laptop">
            </div>
            <div class="About-us-content">
                <h4 style="color:#800020 ;">ABOUT US</h4>
                <h1>Helping businesses <span class="highlight">succeed</span> through the power of video.</h1>
                <p>Video is the future of business in this digital-focused world. Vidyard uses video to change the way companies connect and communicate. We help organizations of all sizes humanize their communications and personalize their customer experiences.</p>
                <a href="#" class="cta">Sign Up for Free</a>
            </div>
        </div>
    </section>
   <section id="Services">
    <div class="container">
      <div class="card">
          <img src="https://via.placeholder.com/250" alt="Card Image">
          <h3>Card Title 1</h3>
          <p>Description goes here.</p>
      </div>
      <div class="card">
          <img src="https://via.placeholder.com/250" alt="Card Image">
          <h3>Card Title 2</h3>
          <p>Description goes here.</p>
      </div>
      <div class="card">
          <img src="https://via.placeholder.com/250" alt="Card Image">
          <h3>Card Title 3</h3>
          <p>Description goes here.</p>
      </div>
      <div class="card">
          <img src="https://via.placeholder.com/250" alt="Card Image">
          <h3>Card Title 4</h3>
          <p>Description goes here.</p>
      </div>
      <div class="card">
          <img src="https://via.placeholder.com/250" alt="Card Image">
          <h3>Card Title 5</h3>
          <p>Description goes here.</p>
      </div>
      <div class="card">
          <img src="https://via.placeholder.com/250" alt="Card Image">
          <h3>Card Title 6</h3>
          <p>Description goes here.</p>
      </div>
  </div>
    </section>
    <div class="contact-container" id="contact">
      <form action="connect.php" method="post">
      <h2>Get In Touch With Us</h2>
      <form id="contactForm">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required name="name">
          
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required name="email">
          
          <label for="phone">Phone (Optional)</label>
          <input type="tel" id="phone" placeholder="Your Phone (Optional)"name="phone">
          
          <label for="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required></textarea>
          
          <button type="submit">Send Message</button>
      </form>
      <p class="success-message" id="successMessage">Thank you! We will get back to you soon. 😊</p>
      
      <div class="contact-info">
          <p><i class="fas fa-phone"></i> 484.324.2400</p>
          <p><i class="fas fa-envelope"></i> info@mediaproper.com</p>
          <p><i class="fas fa-map-marker-alt"></i> 15 West 3rd St, Media, PA 19063</p>
      </div>
  </div>

  <script>
      document.getElementById("contactForm").addEventListener("submit", function(event) {
          event.preventDefault();
          document.getElementById("successMessage").style.display = "block";
          this.reset();
      });
  </script>
</body>
</html>