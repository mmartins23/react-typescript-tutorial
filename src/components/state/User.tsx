import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}

export default function User() {
    const [user, setUser] = useState<AuthUser |null >(null);

    function handleLogin() {
        setUser({
            name: 'John',
            email: 'john@example.com'
        })
    }

    function handleLogOut() {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>
        <p>The current user's details are: {user?.name} {user?.email}</p>
    </div>
  )
}