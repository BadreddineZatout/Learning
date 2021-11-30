// import useFetch from "../hooks/useFetch";
import '../Styles/blog.css';
import BlogList from "./blogs/BlogList";
import { connect } from 'react-redux';

const Home = (props) => {

    console.log(props);
    // const {data: blogs, isPending, error} = useFetch('http://localhost:3001/blogs');
    const blogs = props.blogs;

    return ( 
        <div className="home">
            {/* {error && <div> {error} </div>} */}
            {/* {isPending && <div>Loading ...</div>} */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList>}
        </div>
     );
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}
 
export default connect(mapStateToProps)(Home);