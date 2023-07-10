import { useState } from "react";
import './SearchBar.css';

function SearchBar({onSubmit}) 
{
    const[term, setTerm] = useState('');

    const handleSubmit = (event) => 
    {
        event.preventDefault();  //stops page from refreshing
        onSubmit(term);
    };

    const handleChange = (event) => 
    {
        setTerm(event.target.value);
        //console.log(event.target.value);
    };


    

    return (<div className='search-bar'> 
        <form onSubmit={handleSubmit}>
            <label>Enter image search term:</label>
            <input value={term} onChange={handleChange} />
        </form>
    </div>
    );

}

export default SearchBar;