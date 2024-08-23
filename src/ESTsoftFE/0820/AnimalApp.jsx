import { useState } from "react";

export default function AnimalApp () {
    
    const petDatas = [
        { name: "벨라", species: "고양이", age: "5", id: 111 },
        { name: "루시", species: "강아지", age: "3", id: 112 },
        { name: "데이지", species: "토끼", age: "2", id: 113 },
        { name: "몰리", species: "고양이", age: "1", id: 114 },
        { name: "매기", species: "강아지", age: "6", id: 115 }
    ]

    const [pets, setPets] = useState(petDatas);
    
    return(
        <div>
            <AnimalForm setPets={setPets}/>
            <ul>
                {
                    pets.map((pet) => (
                        <Animal key={pet.id} name={pet.name} species={pet.species} age={pet.age} />
                    ))
                }
            </ul>
        </div>
    );
}

const AnimalForm = ({setPets}) => {

    const [name, setName] = useState('');    
    const [species, setSpecies] = useState('');
    const [age, setAge] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        setPets((prePets)=> { return [...prePets, { name, species, age, id: Date.now() }]})
    }

    return(
        <form onSubmit={onSubmit}>
            <fieldset>
                <legend>새로운 애완동물을 추가하세요!</legend>
                <label><input type="text" placeholder="이름" onChange={event => setName(event.target.value)} value={name} /></label>
                <label><input type="text" placeholder="종류" onChange={event => setSpecies(event.target.value)} value={species} /></label>
                <label><input type="number" placeholder="나이" onChange={event => setAge(event.target.value)} value={age} /></label>
                <button>추가하기</button>
            </fieldset>
        </form>
    );
}

const Animal = ({name, species, age}) => {
    return(
        <li> {name}는 {species}입니다. 그리고 {age}살입니다. </li>
    )
}