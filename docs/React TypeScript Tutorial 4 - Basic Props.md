# React TypeScript Tutorial - 4 - Basic Props

In this React TypeScript tutorial, the code defines a functional component named `Greet` with more complex props. Here's a brief explanation:

```tsx
// Define the type of the 'Greet' component props
type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

// Greet component receives the typed props and displays a message based on the conditions
export default function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
    return (
        <div>
            {isLoggedIn ? <h2>Hi {name}, you have {messageCount} new messages.</h2> : <h2>Welcome Guest</h2>}
        </div>
    );
}
```

- **Type Definition (`GreetProps`):**
  - `type GreetProps = { name: string; messageCount: number; isLoggedIn: boolean; }`: Defines a type `GreetProps` with three properties (`name`, `messageCount`, and `isLoggedIn`) with their respective types.

- **Component (`Greet`):**
  - `export default function Greet({ name, messageCount, isLoggedIn }: GreetProps) { ... }`: Exports the `Greet` component, which takes in the typed props and conditionally displays a personalized greeting or a welcome message based on the value of the `isLoggedIn` prop.

- **JSX:**
  - `{isLoggedIn ? <h2>Hi {name}, you have {messageCount} new messages.</h2> : <h2>Welcome Guest</h2>}`: Uses a ternary operator within JSX to conditionally render either a personalized greeting or a welcome message based on the `isLoggedIn` prop.

This example demonstrates using TypeScript to define and enforce specific types for component props, providing better type safety and code readability. Usage example:

```tsx
import Greet from './Greet';

// Example usage
<Greet name="John" messageCount={5} isLoggedIn={true} />
```

Here, props like `name` must be of type string, `messageCount` must be a number, and `isLoggedIn` must be a boolean.

***