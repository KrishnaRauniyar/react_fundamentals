export const ChildComponent = (props) => {
    return (
        <div>
            <button onClick={() => props.parentClicked('Hello from Child')}>Click Parent</button>
        </div>
    )
}