import axios from "axios";
import React from "react";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };

  getMoives = async () => {
    const movies = await axios.get();
  }

  componentDidMount(){
    // setTimeout(() =>  {
    //   this.setState({isLoading: false});
    // }, 3000);
  
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