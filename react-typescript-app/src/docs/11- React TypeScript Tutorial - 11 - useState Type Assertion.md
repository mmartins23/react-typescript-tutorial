# React TypeScript Tutorial - 11 - useState Type Assertion

## Introduction

In this tutorial, we explore how to use type assertion with the `useState` hook in React with TypeScript. Type assertion can be useful in scenarios where you, as a developer, know that a certain state will be set to a non-null value shortly after the component mounts, and it will not change back to null.

## Scenario

Sometimes, you might know that a state variable will be initialized soon after the component mounts and will never be `null` again. For example, you might set the state in a `useEffect` hook, and assume the user cannot log out. In such cases, you can use type assertion to avoid unnecessary null checks.

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

### Initialize State with Type Assertion

2. **Initialize the State with an Empty Object Using Type Assertion**

   Use the `useState` hook to create a `user` state variable. Initialize it with an empty object and use type assertion to tell TypeScript that this object will be of type `AuthUser`.

   ```tsx
   const [user, setUser] = useState<AuthUser>({} as AuthUser);
   ```

### Define Handlers

3. **Define the Login Handler**

   - **Login Handler**: Set the user state to a hardcoded `AuthUser` object when the login button is clicked.

   ```tsx
   const handleLogin = () => {
     setUser({
       name: 'Vishwas',
       email: 'vishwas@example.com'
     });
   };
   ```

   Note: In this example, we do not provide a logout handler because we assume the user cannot log out.

### Conditional Rendering without Optional Chaining

4. **Render User Information**

   With type assertion, we can directly access the `name` and `email` properties without using optional chaining.

   ```tsx
   return (
     <div>
       <button onClick={handleLogin}>Login</button>
       <div>User name is {user.name}</div>
       <div>User email is {user.email}</div>
     </div>
   );
   ```

### Full Component Code

Here's the complete code for the `User` component with type assertion:

```tsx
import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    });
  };

  // const handleLogout = () => {
  //   setUser(null);
  // };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};
```

### Explanation

- **Type Assertion**: We use the `as` keyword to tell TypeScript that the initial state will eventually be of type `AuthUser`. This allows us to avoid null checks when accessing properties.
- **Optional Chaining**: With type assertion, we no longer need optional chaining to access properties on the `user` object.

### Conclusion

Type assertion can be useful in specific scenarios where you are confident that a state variable will be initialized and won't revert to `null`. However, it should be used cautiously as it involves bypassing TypeScript's type safety mechanisms. Understanding and using type assertion appropriately can help simplify your code and avoid unnecessary null checks.

Thank you for watching. Please like the video and subscribe to the channel for more content!