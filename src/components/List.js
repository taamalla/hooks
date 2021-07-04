import MovieCard from "./Card"

function List({ movies,search }) {

    return (


        <div>
            {movies.filter(el=> el.title.toUpperCase().includes(search.toUpperCase() )).map((el, i) => <MovieCard movie={el} />)}
        </div> 
           

        
    )
}
export default List