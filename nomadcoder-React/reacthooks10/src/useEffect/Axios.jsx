import UseAxios from "./UseAxios";

function Axios() {

    const {loading, data, error} = UseAxios({url : "https://yts.mx/api/v2/list_movies.json"});
    console.log(`Loading: ${loading} \nError: ${error} \nData: ${JSON.stringify(data)}`); 
    // console로 내용을 보여줌 
    

    return(
        <div>

        </div>
    );
}

export default Axios;