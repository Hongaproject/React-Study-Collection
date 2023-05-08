import axios from "axios";
import React from "react";

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
    } = await axios.get(`https://yts.mx/api/v2/movie_details.json`);
    this.setState({movies, isLoading: false});
    // this.setState({movies:movies})

    console.log(movies);
  };

  componentDidMount(){
    // setTimeout(() =>  {
    //   this.setState({isLoading: false});
    // }, 3000);
    this.getMoives();
  }

  render(){
    const { isLoading } = this.state;
    return(
      // <div>hey{this.state.isLoading}</div>
      <div>{isLoading ? "Loading..." : "are you ready?!"}</div>
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