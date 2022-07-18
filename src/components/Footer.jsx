import '../styles/footer.css'
import  logoImg from '../img/beanz-by-breville-logo-white.svg'

const Footer = () => {
  return (
    <div class="footer_container">
      <div class="footer_logo_container">
        <a href="http://localhost:4502/content/aemApp/en/home.html">
          <img
            src={logoImg}
            alt=""
            srcset=""
            class="footer_logo"
          ></img>
        </a>
      </div>

      <div class="footer_content">
        <div class="content">
          <h3>Site</h3>
          <ul>
            <li>
              <a href="http://localhost:4502/content/aemApp/en/home.html">
                Shop Coffee
              </a>
            </li>
            <li>
              <a href="https://">Our Roasters</a>
            </li>
            <li>
              <a href="https://">Barista's Choice</a>
            </li>
            <li>
              <a href="https://">Coffee Lowdown</a>
            </li>
            <li>
              <a href="https://">Our Story</a>
            </li>
            <li>
              <a href="https://">Account</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <h3>Account</h3>
          <ul>
            <li>
              <a href="https://">Roasters</a>
            </li>
            <li>
              <a href="https://">Control Center</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <h3>Support</h3>
          <ul>
            <li>
              <a href="https://">Contact Us</a>
            </li>
            <li>
              <a href="https://">Returns Policy</a>
            </li>
            <li>
              <a href="https://">Promotional</a>
            </li>
            <li>
              <a href="https://"> Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div class="content">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://">Facebook</a>
            </li>
            <li>
              <a href="https://">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
