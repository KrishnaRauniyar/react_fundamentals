export const NameList = () => {
    const names = ["Krishna", "Rauniyar", "Rau"]
    return (
        <div>
            {
                names.map((name) => {
                    return <h1 key={name}>{name}</h1>
                })
            }
        </div>
    )
}