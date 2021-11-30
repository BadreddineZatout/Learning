import {useParams, useNavigate} from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import '../../Styles/blog-details.css';

const Blog = (props) => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch(`http://localhost:3001/blogs/${id}`);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:3001/blogs/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('blog deleted :,)');
            navigate('/');
        });
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading ...</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p><u> Written by : </u>{blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}

 
export default Blog;