import React,{useState} from "react";
import "./style.css";

function Index() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


  return (
    <div>
      <header class="hero container">
      <div className="noscroll">
        <nav class="nav">
          <div class="nav_log">
            <img
              class="nav_img"
              src="https://drive.google.com/uc?export=view&id=1iwkDPJ6n9eRbkNhc7q-9cXst_RL--wRX"
              alt=""
            />
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        {/**class="nav_links"   */}
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <a className="nav-links" href="#">Features</a>
            <a  className="nav-links"  href="#">Sign in</a>
            <a   className="nav-links" href="#">Team</a>
          </div>
        </nav>
        </div>

        <section class="hero_Main">
          <div class="hero_Texts">
            <h1 class="hero_title">
              All your in one secure location, Accessible anywhere
            </h1>
            <p class="hero_copy">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              placeat aperiam rerum quibusdam quidem reprehenderit.
            </p>
            <div class="hero_contact">
              <input
                class="hero_input"
                type="text"
                placeholder="Enter your Email"
              />
              <button class="hero_btn">Get Started</button>
            </div>
          </div>

          <figure class="hero_picture">
            <img src="https://drive.google.com/uc?export=view&id=1kjo3FcfLH1S5YZ1Wxc2oc5YjkUZDUXky" />
          </figure>
        </section>
      </header>

      <main class="main">
        <section class="about">
          <div class="about_container">
            <figure class="about_picture">
              <img
                src="https://drive.google.com/uc?export=view&id=1M8a04dOLOEuWjISxjFW3M2D1xqacXSXD"
                class="about_img"
                alt=""
              />
            </figure>
            <div class="about_text">
              <h2 class="about_title">Stay productive, wherever you are</h2>
              <p class="about_copy">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                dignissimos veritatis doloribus quaerat voluptates natus.
              </p>
              <a href="" class="about_cta">
                See how fylo works <ion-icon name="caret-forward-outline" />
              </a>
            </div>
            <div class="about_card">
              <img
                src="https://drive.google.com/uc?export=view&id=1SbKv9M0g9WojCFwclfZlVryf1LORGgoi"
                alt=""
                class="about_quote"
              />
              <p class="about_copy">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam eaque laudantium inventore voluptates repellat? Sunt?
              </p>
              <div class="about_person">
                <img
                  src="https://drive.google.com/uc?export=view&id=10x_EvqfqIbUF-umBly5sNnUTFeC20FuK"
                  alt=""
                  class="about_testimonial"
                />
                <div class="about_information">
                  <h3 class="about_name">Tomas Arauz</h3>
                  <p class="about_position">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div class="footer_content">
          <div class="about_footer">
            <h4 class="title_footer">About</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              ullam fugiat eveniet maiores suscipit odio? Asperiores nesciunt
              ipsum dolor harum, cupiditate earum, aliquam numquam ullam sit
              iure assumenda obcaecati ipsam. Aliquid adipisci tenetur aliquam
              quos nobis doloribus natus repellat velit, repudiandae iste
              eveniet. Ipsam natus, aperiam accusamus nesciunt itaque autem illo
              unde voluptatum rerum distinctio voluptates dolore. Ex quod
              blanditiis dolorum impedit et hic atque, molestiae voluptatibus
              ipsa corrupti recusandae, saepe nesciunt earum perferendis ut
              ullam quo accusamus, maxime sapiente?
            </p>
          </div>
          <div class="categorias">
            <h4 class="title_footer">Categories</h4>
            <ul>
              <li>PHP</li>
              <li>UI Design</li>
              <li>Java</li>
              <li>Android</li>
              <li>IOS</li>
              <li>Template</li>
            </ul>
          </div>
          <div class="linkss">
            <h4 class="title_footer">Quick links</h4>
            <ul>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Contribute</li>
              <li>Privacy Policy</li>
              <li>Otros</li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="socialmedia">
          <div class="titlesocial">
            <p>CopyRight 2021 all Rights Reserved by Arauz@</p>
          </div>
          <div class="iconosSocial">
            <ion-icon name="logo-instagram" />
            <ion-icon name="logo-facebook" />
            <ion-icon name="logo-twitter" />
            <ion-icon name="logo-linkedin" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
