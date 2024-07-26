## React TypeScript Tutorial - 9 - useState Hook

### Introduction

In this tutorial, we will learn how to type the `useState` hook in React with TypeScript. We will walk through the creation of a simple component to manage and display user login state.

### Step-by-Step Guide

1. **Import useState Hook**

   First, we need to import the `useState` hook from React.

   ```tsx
   import { useState } from 'react';
   ```

2. **Create a State Variable**

   Create a state variable `isLoggedIn` with its setter function `setIsLoggedIn` and initialize it to `false`.

   ```tsx
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   ```

3. **Conditional Rendering**

   Use the `isLoggedIn` state variable to conditionally render text inside a `div` element, indicating whether the user is logged in or logged out.

   ```tsx
   return (
       <div>
           <button onClick={handleLogin}>Login</button>
           <button onClick={handleLogout}>Logout</button>
           <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
       </div>
   );
   ```

4. **Define Handler Functions**

   Define the `handleLogin` and `handleLogout` functions to update the `isLoggedIn` state.

   ```tsx
   const handleLogin = () => {
       setIsLoggedIn(true);
   }

   const handleLogout = () => {
       setIsLoggedIn(false);
   }
   ```

### Full Component Code

Here's the complete code for the `LoggedIn` component:

```tsx
import { useState } from 'react';

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    );
}
```

### TypeScript Type Inference

TypeScript infers the type of `isLoggedIn` and `setIsLoggedIn` based on the initial value passed to `useState`. When `false` is passed as the initial value, TypeScript infers `isLoggedIn` to be of type `boolean`. This type inference ensures type safety in the following scenarios:

- Trying to access properties that don't exist on `boolean` types (e.g., `isLoggedIn.length`) will result in a TypeScript error.
- Passing non-boolean values to the setter function (e.g., `setIsLoggedIn(0)`) will also result in a TypeScript error.

### Conclusion

Using the `useState` hook with TypeScript is straightforward due to type inference. However, for more complex types or situations where the initial value is not known, you might need to provide explicit type annotations. We'll cover these more advanced scenarios in the next tutorial. Thank you for watching, and please subscribe to the channel for more content!