# React TypeScript Tutorial  15 - useContext Future Value

In this example, you've created a `UserContext` using the `createContext` function along with a `UserContextProvider` to provide the user context to its children. The `User` component uses the `useContext` hook to consume the context and perform login and logout actions.

Here's a breakdown of your code:

1. **`UserContextProvider` Component:**
   ```javascript
   import React, { useState, createContext } from 'react';

   type AuthUser = {
     name: string;
     email: string;
   };

   type UserContextType = {
     user: AuthUser | null;
     setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
   };

   type UserContextProviderProps = {
     children: React.ReactNode;
   };

   export const UserContext = createContext({} as UserContextType);

   export const UserContextProvider = ({ children }: UserContextProviderProps) => {
     const [user, setUser] = useState<AuthUser | null>(null);

     return (
       <UserContext.Provider value={{ user, setUser }}>
         {children}
       </UserContext.Provider>
     );
   };
   ```

   - The `UserContextProvider` component creates a context using `createContext` and provides the `user` and `setUser` state through the context value.

2. **`User` Component:**
   ```javascript
   import { useContext } from 'react';
   import { UserContext } from './UserContext';

   export const User = () => {
     const userContext = useContext(UserContext);

     const handleLogin = () => {
       if (userContext) {
         userContext.setUser({
           name: 'John',
           email: 'john@example.com'
         });
       }
     };

     const handleLogout = () => {
       if (userContext) {
         userContext.setUser(null);
       }
     };

     return (
       <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>User name is {userContext.user?.name}</div>
         <div>User email is {userContext.user?.email}</div>
       </div>
     );
   };
   ```

   - The `User` component uses the `useContext` hook to access the `UserContext`.
   - It provides buttons for login and logout, updating the user context accordingly.
   - It displays the user's name and email from the context.

Usage example:

```javascript
import React from 'react';
import { UserContextProvider } from './UserContext';
import { User } from './User';

export const App = () => {
  return (
    <UserContextProvider>
      <User />
    </UserContextProvider>
  );
};
```

This example demonstrates how to use the `useContext` hook with a context that provides user information.