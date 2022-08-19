export const Greet = (props) => {
    return (
        <div>
            <h1>{props.name} {props.yourCaste}</h1>
            {props.children}
        </div>
    )

}
