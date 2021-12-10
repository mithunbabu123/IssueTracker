
import {Link} from "react-router-dom";
import "../App.css";


function Nav() {
    return(
        <div className="nav-links">
    <nav>
        
     <ul className="element">
     <Link to="/" className="link">
         <li id="home">Home</li></Link>
         <Link to="/create" className="link"> 
         <li id="add">Add </li></Link> 
         <Link to="/edit/:id" className="link">
         <li id="update">update</li></Link>
     </ul>
    </nav>
    </div>);
}

export default Nav;