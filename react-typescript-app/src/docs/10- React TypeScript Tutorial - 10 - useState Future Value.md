# React TypeScript Tutorial - 10 - useState Future Value

## Introduction

In this tutorial, we explore how to use the `useState` hook in React with TypeScript when the initial state value is not known at the time of component initialization and will be set in the future. This scenario often arises in applications where user data is fetched after some user interaction, such as logging in.

## Step-by-Step Guide

### Define the Component and State Type

1. **Create the Component and State Type**

   Create a new file `user.tsx` inside the `state` folder and define a type for the user state. The `AuthUser` type includes properties for `name` and `email`.

   ```tsx
   import { useState } from 'react';

   type AuthUser = {
     name: string;
     email: string;
   };
   ```

### Initialize State

2. **Initialize the State with null**

   Use the `useState` hook to create a `user` state variable, initializing it to `null`. Specify that the `user` can be either of type `AuthUser` or `null`.

   ```tsx
   const [user, setUser] = useState<AuthUser | null>(null);
   ```

### Define Handlers

3. **Define the Login and Logout Handlers**

   - **Login Handler**: Set the user state to a hardcoded `AuthUser` object when the login button is clicked.
   - **Logout Handler**: Reset the user state to `null` when the logout button is clicked.

   ```tsx
   const handleLogin = () => {
     setUser({
       name: 'Vishwas',
       email: 'vishwas@example.com'
     });
   };

   const handleLogout = () => {
     setUser(null);
   };
   ```

### Conditional Rendering

4. **Render User Information Conditionally**

   Use optional chaining to safely access properties on the `user` object, which can be `null`.

   ```tsx
   return (
     <div>
       <button onClick={handleLogin}>Login</button>
       <button onClick={handleLogout}>Logout</button>
       <div>User name is {user?.name}</div>
       <div>User email is {user?.email}</div>
     </div>
   );
   ```

### Full Component Code

Here's the complete code for the `User` component:

```tsx
import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
```

### Explanation

- **Type Inference**: By initializing the `user` state to `null`, TypeScript infers the type of `user` as `null`. We override this by explicitly specifying the type `<AuthUser | null>` in `useState`.
- **Optional Chaining**: Used to safely access `name` and `email` properties on the `user` object. If `user` is `null`, the expression short-circuits and returns `undefined`, preventing runtime errors.

### Conclusion

In scenarios where the state’s initial value is unknown but will be set in the future, explicitly specifying the type in `useState` is essential. This approach ensures type safety and leverages TypeScript's capabilities to handle nullable state effectively. Understanding this pattern is crucial for managing complex state logic in React applications with TypeScript.

Thank you for watching. Please like the video and subscribe to the channel for more content!