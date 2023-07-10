import { useState } from 'react';
import searchImages from './api';
import SearchBar from './recources/SearchBar';
import ImageList from './recources/ImageList';

function App() 
{
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) =>
    {
        //console.log('Do a search with', term);
        const result = await searchImages(term);
        setImages(result);

    };

    return <div> 
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images={images}/> 
    </div>

}

export default App;