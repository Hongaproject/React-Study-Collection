import axios from "axios";
import React from "react";
import Movie from "./components/Movie";
import "./App.css";


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMoives = async () => {
    // const movies = await axios.get(`https://yts.mx/api/v2/movie_details.json`);
    // this.setState({movies:movies.data.data.movies})
    // console.log(movies.data.data.movies);

    const {
      data: {
        data: {movies}
      }
    } = await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating`);
    this.setState({movies, isLoading: false});
    // this.setState({movies:movies})
  };

  componentDidMount(){
    // setTimeout(() =>  {
    //   this.setState({isLoading: false});
    // }, 3000);
    this.getMoives();
  }

  render(){
    const { isLoading, movies } = this.state;
    return(
      // <div>hey{this.state.isLoading}</div>
      // <div>{isLoading ? "Loading..." : "are you ready?!"}</div>
      // <div>{isLoading ? "Loading..." : this.state.movies.map()}</div>

      // <div>
      //   {isLoading ? "Loading..." : movies.map(movie=> (
      //     <Movie 
      //       key={movie.id}
      //       id={movie.id} 
      //       year={movie.year} 
      //       title={movie.title} 
      //       summary={movie.summary} 
      //       poster={movie.medium_cover_image}
      //       />
      //
      //
      //   ))}
      // </div>

      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div> ) : ( 
          <div className="movies">
            {movies.map(movie=> (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
            />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;



// function App() {
//   return(
//     <div>
   
//     </div>
//   );
// }

// export default App;