import useFetch from "./useFetch";
import {useParams, useHistory} from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs/' + id); 
    const history = useHistory();   
    
    const handleClick= () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then (() => {
            history.push('/')
        })
    };

    return ( 
        <div className="blog-details"> 
        {isPending && <div>Ucitavanje....</div>}
        {error && <div>{error}</div>}
        {blogs && (
            <article>
                <h2>{blogs.title}</h2>
                <p>Napisao/la {blogs.author}</p>
                <div>{blogs.body}</div>
                <button onClick={handleClick}>Obrisi Blog</button>
            </article>
        )}
        </div>
     );
}
 
export default BlogDetails;