import React, {useState} from 'react';
import MovieCard from './MovieCard';



const MovieList = (props) => {
    const [searchTerm, setSearchTerm] = useState('')
    return ( 
        <div>  
            <label className='m-3'>Filter:</label>
            <input type="text" placeholder='Enter a movie film to search...' onChange={(e)=>setSearchTerm(e.target.value)} />
                {props.data.filter((val)=>{
                    if(searchTerm == "") {
                        return val
                    } else if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return val
                    }
                }).map((item, key)=>{
                return (
                    <div key={key}>
                    <MovieCard item={item}/>
                    </div>
                )
                })}
        </div>
     );
}
 
export default MovieList;