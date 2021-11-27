import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h1>Error 404</h1>
            <h2>Page not Found</h2>
            <Link to="/">Back to the home page ... </Link>
        </div>
     );
}
 
export default NotFound;