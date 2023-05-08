import React from "react";

class Movies extends React.Component{
    state = {
        isLoading: true
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 3000);
    }
    render(){
        const isLoading = this.state;
        return(
            // <div>hey{this.state.isLoading}</div>
            <div>{isLoading ? "Loading..." : "Are you ready?!"}</div>
        );
    }
}

export default Movies;