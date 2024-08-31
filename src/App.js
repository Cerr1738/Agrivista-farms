import React from 'react';
import './App.css';
import calltoaction from "./pictures/calltoaction.png";
import check from './pictures/check.png';
import grass from './pictures/grass.png';
import Group1 from './pictures/Group1.png';
import Group2 from './pictures/Group2.png';
import icon from './pictures/icon.png';
import icons from './pictures/iconsss.png';
import image1 from './pictures/image1.png';
import Localteam from './pictures/Localteam.png';
import next from './pictures/next.png';
import prev from './pictures/prev.png';
import Product from './pictures/Product.png';
import maize from './pictures/maize.png';
import man from './pictures/maninsuit.png';
import pumpkin from './pictures/Pumpkin.png';
import rating from './pictures/Rating.png';
import rect from './pictures/rect.png';
import star from './pictures/star_rate.png';
import vector from './pictures/Vector.png';
import water from './pictures/water.png';
import wheat from './pictures/wheat.png';
import woman from './pictures/woman.png';
import world from './pictures/world.png';
import cabbage from './pictures/cabbage.png';
import NavBar from './NavBar';



function App() {
    
  return (
    <div className='AppClass'>

    <NavBar /> 
      <section className="section1">
        <div className='header-nav'>
          

          <img src={image1} alt="" />
          <div className='body'>
            <h1>
              The Role of Technology <span>in Revolutionizing</span> <span>Agriculture</span>
            </h1>
            <p>
              Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
              Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
            </p>
            <div className='body-button'>
              <button className='body-getstarted'>Get Started</button>
              <button className='body-learn'>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section2">
        <div className="passion">
          <h1>
            Our Passion for Agriculture Nurturing Growth and Sustaining the Future
          </h1>
          <p>
            Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.
            Por scientie, musica, sport etc, litot Europa usa li sam vocabular.
          </p>
          <button className='passion-getstarted'>Get Started</button>
        </div>

        <div className="image">
          <img src={grass} alt="" className="grass" />
          <div className="since">
            <h2>Since 1976</h2>
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="service">
          <h1>Our Service</h1>
          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>
        </div>

        <div className="content">
          <div className="blog">
            <img src={icon} alt="" />
            <h5>Blog and Article Writing</h5>
          </div>

          <div className="blog">
            <img src={Group2} alt="" />
            <h5>Website Content</h5>
          </div>
          <div className="blog">
            <img src={Group1} alt="" />
            <h5>Content Strategy and Consulting</h5>
          </div>

          <div className="blog">
            <img src={world} alt="" />
            <h5>Social Media Management</h5>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="features">
          <h1>Our Featured Products</h1>
          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>
        </div>

        <div className="content2">
          <div className="products">
            <img src={cabbage} alt="" />
            <h5>Rice</h5>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
          </div>

          <div className="products">
            <img src={wheat} alt="" />
            <h5>Wheat</h5>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
          </div>
          <div className="products">
            <img src={pumpkin} alt="" />
            <h5>Pumpkin</h5>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
          </div>
          <div className="products">
            <img src={maize} alt="" />
            <h5>Cabbage</h5>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
          </div>
        </div>
        <a href="">See all products</a>
      </section>

      <section className="section5">
        <img src={calltoaction} alt="" />
      </section>

      <section className="ben-fits">
        <div className="ben">
          <div className="benefits">
            <h1>The Benefits of Choosing Our Expertise</h1>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
            <button>Learn More <img src={vector} alt="" /></button>
          </div>

          <div className="choose">
            <div className="choose-one">
              <img src={rating} alt="" />
              <div>
                <h2>15+</h2>
                <p>Years Of Experience</p>
              </div>
            </div>

            <div className="choose-one">
              <img src={Product} alt="" />
              <div>
                <h2>40+</h2>
                <p>Products</p>
              </div>
            </div>

            <div className="choose-one">
              <img src={check} alt="" />
              <div>
                <h2>2,458+</h2>
                <p>Satisfied Clients</p>
              </div>
            </div>

            <div className="choose-one">
              <img src={Localteam} alt="" />
              <div>
                <h2>20</h2>
                <p>Local Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section6">
        <div className="testimonials">
          <h1>Testimonials</h1>
          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
        </div>

        <div className="slider-container">
          <div className="slider-button">
            <button className="prev"><img src={prev} alt="" /></button>
            <button className="next"><img src={next} alt="" /></button>
          </div>
          <div className="slider1">
            <img src={man} alt="" className="image10" />
            <div className="slider-one">
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <h4>Madeline Williamson</h4>
              <h6>Forward Creative Manager</h6>
              <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section7">
        <div className="blog-sect">
          <h1>Our Blog</h1>
          <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular</p>
        </div>

        <div className="blog-posts">
          <div className="posts">
            <img src={water} alt="" />
            <h4>Innovations for a Greener Future</h4>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.</p>
            <a href="">Read More</a>
          </div>

          <div className="posts">
            <img src={woman} alt="" />
            <h4>The Power of Agricultural Analytics</h4>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.</p>
            <a href="">Read More</a>
          </div>

          <div className="posts">
            <img src={rect} alt="" />
            <h4>Cultivating Sustainable and Resilient Farms</h4>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica.</p>
            <a href="">Read More</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="all">
          <div className="agriv">
            <h4>AgriVista Farms</h4>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie</p>
            <img src={icons} alt="" />
          </div>

          <div className="listitem">
            <div className="pages">
              <h4>Pages</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Product</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="about">
              <h4>About</h4>
              <ul>
                <li>Testimonials</li>
                <li>Our Service</li>
                <li>Contact Us</li>
                <li>Benenfit</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
