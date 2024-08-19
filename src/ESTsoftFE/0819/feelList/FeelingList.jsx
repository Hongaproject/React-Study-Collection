import FeelingItem from "./FeelingItem";

export default function FeelingList (props) {

    const feelings = ["좋아요! 😀", "정말 좋아요! 🤭", "최고에요! 🤩", "미쳤어요!! 🤣"] 

    return(
        <ul>
            {
                feelings.map((item, index) => {
                    return <FeelingItem key={index} item={item} itemClick={props.onItemClick} isSelected={props.item === item}/>
                })
            }
        </ul>
    );
}