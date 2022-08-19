export const UserGreeting = () => {
    const isLoggedIn = true
    // return <div>Hello {isLoggedIn ? 'Krishna' : 'Rauniyar'}</div>
    //short circuit ternary operator
    return <div>Hello {isLoggedIn && "Krishna"}</div>
}