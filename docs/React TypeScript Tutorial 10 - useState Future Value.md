# React TypeScript Tutorial 10 - useState Future Value

In this example, you've extended the use of the `useState` hook to manage the state of a user object. The user object has properties `name` and `email` and is of type `AuthUser`. The `useState` hook is now declared with the type `AuthUser | null`, indicating that the state can either be an authenticated user or `null` if no user is logged in.

Here's a breakdown of your code:

1. **Importing `useState`:**
   ```javascript
   import { useState } from "react";
   ```

   You import the `useState` hook from the React library.

2. **Type Definition (`AuthUser`):**
   ```typescript
   type AuthUser = {
     name: string;
     email: string;
   }
   ```

   You've defined a type `AuthUser` which specifies the shape of an authenticated user object.

3. **Functional Component (`User`):**
   ```javascript
   export default function User() {
     const [user, setUser] = useState<AuthUser | null>(null);

     function handleLogin() {
       setUser({
         name: 'John',
         email: 'john@example.com'
       });
     }

     function handleLogOut() {
       setUser(null);
     }

     return (
       <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogOut}>Logout</button>
         <p>The current user's details are: {user?.name} {user?.email}</p>
       </div>
     );
   }
   ```

   - The `User` component uses the `useState` hook to declare a state variable `user` of type `AuthUser | null`. The initial state is set to `null`.

   - Two functions, `handleLogin` and `handleLogOut`, update the `user` state by either setting it to a mock authenticated user object or `null` accordingly.

   - The component provides two buttons with `onClick` events linked to the login and logout functions.

   - A paragraph (`<p>`) displays the current user's details. The use of the optional chaining (`user?.name` and `user?.email`) ensures that the properties are accessed safely, even when `user` is `null`.

This example demonstrates using the `useState` hook to manage the state of a user object with a more complex type.