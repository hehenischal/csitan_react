import "./Navbar.css"
const Navbar = () => {
    return(
        <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Notifications</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Profile</a></li>
            <li className="search">
              <form>
                <input type="text" placeholder="Search Twitter"/>
                <button type="submit"><i className="fa fa-search"></i></button>
              </form>
            </li>
          </ul>
        </nav>
      </header>
      
    );
};

export default Navbar;