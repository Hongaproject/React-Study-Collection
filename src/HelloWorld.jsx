export default function HelloWorld ({color, backgroundColor, padding, name}) {
    return (
        <div>
            <h2 style={{color, backgroundColor, padding}}>
                Hello World {name}
            </h2>
        </div>
    );
}