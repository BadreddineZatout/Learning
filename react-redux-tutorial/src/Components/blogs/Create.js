import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../../Styles/create-blog.css';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ninja');
    const navigate = useNavigate();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:3001/blogs', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('new blog added');
            navigate('/');
        });
    }

    return ( 
        <div className="create">
             <h1>Add a new Blog</h1>
             <form action="" onSubmit={handleSubmit}>
                 <label>Blog title : </label>
                 <input name="title" type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                 <label>Blog body : </label>
                 <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
                 <label>Blog author</label>
                 <select name="author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} >
                     <option value="Badreddine">Badreddine</option>
                     <option value="Ninja">Ninja</option>
                     <option value="Badi">Badi</option>
                 </select>
                 <button>Add blog</button>
             </form>
        </div>
     );
}
 
export default Create;