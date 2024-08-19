
export default function FeelingItem (props) {

    const onItemClick = () => {
        props.itemClick(props.item)
    }

    const getBackgroudColor = () => {
        return props.isSelected ? 'skyblue' : null
    };

    return(
        <li>
            <button style={{ backgroundColor: getBackgroudColor() }} onClick={onItemClick}>기분은 : {props.item}</button>
        </li>
    );
}
