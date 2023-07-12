
function Wrapper({children}){
    
    const box = {
        border: '2px solid black',
        padding: '20px'
    }
    return(
        <div style={box}>
            {children}
        </div>
    );
}

export default Wrapper;