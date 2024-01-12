import { LOGO } from "./Logo";

const Header = () => {
    return(
        <div className="Header">
        <LOGO/>
        <ul className="nav-links">
        <li><i className="fa-solid fa-percent"></i>Offers</li>    
        <li><i className="fa-solid fa-question"></i>Help</li>    
        <li><i className="fa-solid fa-user"></i>Sign In</li>    
        <li><i className="fa-solid fa-cart-shopping"></i>Cart</li>    
        </ul>    
        </div>
    );
};

export default Header;