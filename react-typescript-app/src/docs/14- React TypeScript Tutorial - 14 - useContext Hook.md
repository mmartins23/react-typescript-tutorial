# React TypeScript Tutorial - 14 - useContext Hook

## Introduction

In this tutorial, we explore how to use TypeScript with the React `useContext` hook. We'll focus on typing the context API, using a theme context as an example. This allows us to provide and consume theme values in our components with type safety.

## Setting Up Context

### Step 1: Create Theme Object

First, we define a simple theme object with primary and secondary color palettes.

```tsx
// theme.ts
export const theme = {
    primary: {
        main: '#3f51b5',
        text: '#fff'
    },
    secondary: {
        main: '#f50057',
        text: '#fff'
    }
};
```

### Step 2: Create Theme Context

Next, we create a context to hold our theme object.

```tsx
// ThemeContext.tsx
import React, { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
    children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};
```

### Step 3: Provide Context

We wrap our components with the `ThemeContextProvider` to provide the context value.

```tsx
// App.tsx
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

function App() {
    return (
        <div className="App">
            {/* Other components */}
            <ThemeContextProvider>
                <Box />
            </ThemeContextProvider>
        </div>
    );
}

export default App;
```

## Consuming Context

### Step 4: Consume Context in a Component

To consume the context value, we use the `useContext` hook.

```tsx
// Box.tsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
    const theme = useContext(ThemeContext);
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            Theme context
        </div>
    );
};
```

## Summary

### Steps to Use `useContext` with TypeScript

1. **Create Theme Object**: Define the theme object with necessary properties.
2. **Create Context**: Use `createContext` to create a context with the theme object.
3. **Provide Context**: Wrap your components with the `ThemeContextProvider` to provide the context value.
4. **Consume Context**: Use the `useContext` hook to consume the context value in your components.

### Key Points

- **Type Safety**: TypeScript ensures that the context value conforms to the specified type, catching errors at compile time.
- **Ease of Use**: With TypeScript's type inference, context values are automatically typed, simplifying the use of context in components.
- **Scalability**: This approach scales well for more complex applications where context values may change or grow in complexity.

By following these steps, you can effectively use the `useContext` hook with TypeScript, ensuring type safety and a smooth development experience.