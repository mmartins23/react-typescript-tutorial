# React TypeScript Tutorial - 15 - useContext Future Value

## Introduction

In this tutorial, we learn how to work with the React `useContext` hook in TypeScript when dealing with a context value that is not immediately known (i.e., a future value). We will manage the authenticated state of a user, allowing them to log in and log out.

## Setting Up the Context

### Step 1: Define the User Context

First, we create a context to hold user information, which includes the user's name and email.

```tsx
// usercontext.tsx
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

// Create the context with an initial value of an empty object cast to UserContextType
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

### Step 2: Provide Context

Wrap your components with the `UserContextProvider` to provide the context value.

```tsx
// App.tsx
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

function App() {
    return (
        <div className="App">
            {/* Other components */}
            <UserContextProvider>
                <User />
            </UserContextProvider>
        </div>
    );
}

export default App;
```

## Consuming Context

### Step 3: Consume Context in a Component

To consume the context value, we use the `useContext` hook.

```tsx
// User.tsx
import { useContext } from 'react';
import { UserContext } from './UserContext';

export const User = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        userContext.setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com'
        });
    };

    const handleLogout = () => {
        userContext.setUser(null);
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

## Summary

### Steps to Use `useContext` with a Future Value in TypeScript

1. **Define User Context**: Create a context with an initial value of an empty object cast to the appropriate type to avoid null checks.
2. **Provide Context**: Use a context provider component to wrap your application or component tree.
3. **Consume Context**: Use the `useContext` hook to access and manipulate context values in your components.

### Key Points

- **Type Assertion**: Using type assertion when creating the context avoids the need for null checks.
- **State Management**: The provider component manages the state, providing functions to update the context value.
- **Type Safety**: TypeScript ensures the context value conforms to the specified type, catching errors at compile time.

By following these steps, you can effectively manage future context values in your React application using TypeScript, ensuring type safety and a smooth development experience.