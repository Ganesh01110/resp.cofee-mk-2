import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <section className="footer">
      <div className="shar">
        <i >
          <FaFacebook />
        </i>
        <i >
          <FaTwitter />
        </i>
        <i >
          <FaWhatsapp />
        </i>
        <i >
          <FaInstagram />
        </i>
        <i >
          <FaLinkedin />
        </i>
        <i >
          <FaGithub />
        </i>
      </div>

      <div className="links">
        
          <Link className="link" to="home" > home </Link>
        
        
          <Link className="link" to="about"> about</Link>
        
        
          <Link className="link" to="menu"> menu</Link>
        
        
          <Link className="link" to="product">product </Link>
        
        
          <Link className="link" to="review"> review </Link>
        
        
          <Link className="link" to="contact"> contact </Link>
        
        
          <Link className="link" to="blog"> blog</Link>{" "}
        
      </div>
      <div className="credit">
        created by{" "}
        <span>
          <h1>Ganesh sahu</h1>
        </span>
      </div>
    </section>
  );
};

export default Footer;
