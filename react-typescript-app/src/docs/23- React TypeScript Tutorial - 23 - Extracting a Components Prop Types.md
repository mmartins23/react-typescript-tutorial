# React TypeScript Tutorial - 23 - Extracting a Component's Prop Types

In this tutorial, we learn how to extract a component's prop types in React using TypeScript. This is particularly useful for creating components that share or reuse props from existing components.

## Overview

### Key Concepts:
1. **Type Extraction**: Extracting and reusing prop types from existing components.
2. **Component Props Type**: Utilizing `React.ComponentProps` to infer and apply prop types.

### Practical Example:
1. Extracting props from a `Greet` component and reusing them in a `CustomComponent`.

## Greet Component

### Step 1: Define GreetProps

First, we define the prop types for the `Greet` component.

```tsx
type GreetProps = {
    name: string;
    messageCnt?: number;
    isLoggedIn: boolean;
};
```

- **name**: A required string.
- **messageCnt**: An optional number with a default value of 0.
- **isLoggedIn**: A required boolean.

### Step 2: Create the Greet Component

Using the defined `GreetProps`, we create the `Greet` component.

```tsx
function Greet({ name, messageCnt = 0, isLoggedIn }: GreetProps) {
    return (
        <div>
            {isLoggedIn ? (
                <h2>
                    Hey {name}! You have {messageCnt} unread messages
                </h2>
            ) : (
                <h2>Welcome Guest</h2>
            )}
        </div>
    );
}

export default Greet;
```

- **Props Destructuring**: Destructure `name`, `messageCnt`, and `isLoggedIn` from the props.
- **Conditional Rendering**: Display different messages based on the `isLoggedIn` prop.

## CustomComponent

### Step 1: Extract Greet Component Props

We use `React.ComponentProps` to extract the prop types from the `Greet` component.

```tsx
import React from 'react';
import Greet from '../Greet';

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return <div>{props.name}</div>;
};
```

- **Type Extraction**: `React.ComponentProps<typeof Greet>` extracts the prop types from `Greet`.

### Step 2: Usage in App Component

We use both `Greet` and `CustomComponent` in our `App` component.

```tsx
import './App.css';
import Greet from './components/Greet';
import { CustomComponent } from './components/CustomComponent';

function App() {
    return (
        <div className="App">
            <Greet name={'Hal Jordan'} messageCnt={10} isLoggedIn={true} />
            <CustomComponent name={'Hal Jordan'} messageCnt={10} isLoggedIn={true} />
        </div>
    );
}

export default App;
```

- **Prop Passing**: Pass the same props to both `Greet` and `CustomComponent`.

## Summary

### Key Takeaways

1. **Type Extraction**: Using `React.ComponentProps` to extract and reuse prop types from existing components.
2. **Reusability**: Enhances reusability and consistency in your codebase by sharing prop types across components.
3. **Type Safety**: Ensures type safety and reduces the chances of errors when props are shared between components.

### Practical Applications

- **Design Systems**: Useful for building design systems where multiple components share common prop types.
- **Consistent Interfaces**: Ensures consistent interfaces and reduces the need for redundant prop type definitions.

By following these steps, you can efficiently extract and reuse prop types in your React components, promoting consistency and type safety in your codebase.