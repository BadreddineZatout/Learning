import { Link } from "react-router-dom";

const Navbar = () => {
    const newBlogStyle = {
        color: "white",
        backgroundColor: "#f1356d",
        borderRaduis: "8px"
      };
    return ( 
        <nav className="navbar">
            <h1>The Badi Blog</h1>
            <div className="links">
                <Link to="/"> Home</Link>
                <Link to="/create" style={newBlogStyle}> New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;