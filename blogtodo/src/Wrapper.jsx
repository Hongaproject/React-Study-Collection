
function Wrapper({children}){
    
    const box = {
        border: '2px solid black',
        padding: '20px'
    }
    return(
        <div style={box}>
            {children}
            {/* Wrapper태그 안에 있는 컴포넌트들 내용을 보여주기 위해 children사용 */}
        </div>
    );
}

export default Wrapper;