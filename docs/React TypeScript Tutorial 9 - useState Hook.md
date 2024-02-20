# React TypeScript Tutorial 9 - useState Hook

In this example, you've created a React functional component named `LoggedIn` that uses the `useState` hook to manage the state of the `isLoggedIn` variable. The component provides two buttons for logging in and logging out, and it displays the current user status based on the value of `isLoggedIn`.

Here's a breakdown of your code:

1. **Importing `useState`:**
   ```javascript
   import { useState } from "react";
   ```

   You import the `useState` hook from the React library, which allows you to add state to your functional components.

2. **Functional Component (`LoggedIn`):**
   ```javascript
   export default function LoggedIn() {
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     function handleLogin() {
       setIsLoggedIn(true);
     }

     function handleLogOut() {
       setIsLoggedIn(false);
     }

     return (
       <div>
         <button onClick={handleLogin}>Click to login</button>
         <button onClick={handleLogOut}>Click to logout</button>
         <p>The user is {isLoggedIn ? 'logged in' : 'logged out'}</p>
       </div>
     );
   }
   ```

   - The `LoggedIn` component uses the `useState` hook to declare a state variable `isLoggedIn` and a function `setIsLoggedIn` to update its value. The initial state is set to `false`.

   - The component provides two buttons with `onClick` events linked to `handleLogin` and `handleLogOut` functions, which update the `isLoggedIn` state accordingly.

   - A paragraph (`<p>`) displays the current user status based on the value of `isLoggedIn`.

   This example demonstrates a simple use of the `useState` hook to manage the state of a variable (`isLoggedIn`) within a functional component.