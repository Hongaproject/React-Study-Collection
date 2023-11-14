let a = ["분류1", "분류2"]
let b = ['강아지', '호랑이', '고양이', '악어', '하마'];
let c = [1000, 5000, 3000, 7000, 9000];
let d = ['사과', '수박', '멜론', '포도'];
let e = [500, 8000, 8000, 3000];

function test3 () {

    return(
        <div>
            <h2>{a[0]}</h2>
            {
                b.map((list, index) => (
                    <div>
                        <h2>{list + ' ' + c[index]}</h2>
                    </div>
                ))
            }
            <h2>{a[1]}</h2>
            {
                d.map((list, index) => (
                    <h2>{list + ' ' + e[index]}</h2>
                ))
            }
        </div>
    );
}

export default test3;