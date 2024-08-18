
export default function Study1 () {

    const list = [
        { no: 1, area: "대전", visited: false },
        { no: 2, area: "부산", visited: true },
        { no: 3, area: "목포", visited: false },
        { no: 4, area: "제주도", visited: false },
    ];

    return(
        <div>
            {
                list.map((item) => (
                    <div className={item.visited ? 'active' : null}>
                        {item.area}
                    </div>
                ))
            }
        </div>
    );
}