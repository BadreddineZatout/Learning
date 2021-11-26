import useFetch from "../hooks/useFetch";
import '../Styles/blog.css';
import BlogList from "./blogs/BlogList";
const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:3001/blogs');

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
        </div>
     );
}
 
export default Home;