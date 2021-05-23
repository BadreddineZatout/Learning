import BlogList from "./blogList";
import useFetch from "./useFetch";
const Home = () => {
   const {data:blogs, isPending} = useFetch('http://localhost:8000/blogs');


   

    return ( 
        <div className="home">
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs ={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;