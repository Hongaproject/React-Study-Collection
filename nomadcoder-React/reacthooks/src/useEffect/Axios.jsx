import UseAxios from "./UseAxios";

function Axios() {

    const {loading, data, error} = UseAxios({url : "https://yts.mx/api/v2/list_movies.json"});
    console.log(`Loading: ${loading} \nError: ${error} \nData: ${data}`);

    return(
        <div>

        </div>
    );
}

export default Axios;