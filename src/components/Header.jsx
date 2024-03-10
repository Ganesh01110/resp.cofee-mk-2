import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  console.log("bag contains", bag);


  // for menu activation
let navbar =document.querySelector('.navbar');


const handleMenu = () => {
    navbar.classList.toggle('active');
    searchItem.classList.remove('active');
}



// for search activation
let searchItem =document.querySelector('.search-form');

const handleSearch = () => {
  searchItem.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchItem.classList.remove('active');

}

  return (
    <header className="header">
      <a href="#" class="logo">
        <img src="logo.avif" alt="" />
      </a>

      <nav className="navbar">
        <Link to="/">
          {" "}
          home
        </Link>

        <Link to="about">
          about
        </Link>

        <Link to="menu">
          menu
        </Link>

        <Link to="product">
          products
        </Link>
        <Link to="review">
          review
        </Link>
        <Link to="contact">         
          contact
        </Link>
        <Link to="blog">
          blog 
        </Link>
      </nav>

      <div className="icons">
        <i onClick={handleSearch}>
          {" "}
          <CiSearch />
        </i>
        <Link to="bag">
          <i >
            
            <CiShoppingCart  />
          <span className="bag-item-count" style={{top:"-20%",left:"0%"}}>{bag.length}</span>
           
          </i>
         
        </Link>
        <i onClick={handleMenu}>
          <IoMenu />
        </i>
      </div>

      <div className="search-form">
        <input type="search" id="search-box" placeholder="search here..." />
        <label htmlFor="search-box" className="ri-search-line"></label>
      </div>

    
    </header>
   
  );
};

export default Header;
