import { useState } from "react"

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {
        setIsLoggedIn(true)
    }

    function handleLogOut() {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLogin}>Click to login</button>
            <button onClick={handleLogOut}>Click to logout</button>
            <p>The user is {isLoggedIn ? 'logged in' : 'logged out'}</p>
        </div>
    )
}