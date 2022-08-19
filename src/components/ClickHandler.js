export const ClickHandler = () => {
    const buttonClicked = (event, count = 1) => {
        return console.log('Button Clicked', count, event)
    }
    return (
        <div>
            <button onClick={buttonClicked}>Click</button>
            <button onClick={(event) => buttonClicked(event, 5)}>Click 5</button>
        </div>
    )
}