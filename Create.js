import { useState } from "react";
import { useHistory} from "react-router-dom";

const Create = () => {
    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('');
    const [isPanding, setIsPanding] = useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) => {
       
        e.preventDefault();
        const blog = {title, body, author};

        setIsPanding(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then (() => {
            setIsPanding(false);
            history.push('/')
        });

    }

    return (   
        <div className="create">
            <h2>Dodaj novi blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Naslov bloga:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                
                <label>Blog:</label>
                <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Autor:</label>
                <select 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                    <option value="petar">Petar</option>
                </select>

                  {!isPanding && <button>Dodaj Blog</button>} 
                  { isPanding && <button disabled>Dodavanje....</button>}
                  
                   </form>
        </div>
    );
}
    
export default Create 
