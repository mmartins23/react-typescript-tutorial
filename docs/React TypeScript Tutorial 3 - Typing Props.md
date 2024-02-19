# React TypeScript Tutorial 3 - Typing Props

In this React TypeScript tutorial, the code defines a functional component named `Greet` that takes a prop named `name` with a specified type. Here's a brief explanation:

```tsx
// Define the type of the 'name' prop
type GreetProps = {
    name: string;
}

// Greet component receives the typed prop and displays a message
export default function Greet({ name }: GreetProps) {
    return (
        <div>
            <h2>Hi {name}, you have 5 new messages.</h2>
        </div>
    );
}
```

- **Type Definition (`GreetProps`):**
  - `type GreetProps = { name: string; }`: Defines a type `GreetProps` with a single property `name`, specifying that it should be of type string.

- **Component (`Greet`):**
  - `export default function Greet({ name }: GreetProps) { ... }`: Exports the `Greet` component, which takes in the typed prop `name` and displays a greeting message with the provided name.

- **JSX:**
  - `<h2>Hi {name}, you have 5 new messages.</h2>`: Incorporates the `name` prop within JSX to dynamically display a personalized greeting.

This ensures type safety by explicitly defining the expected prop types, making it easier to catch potential errors and improving code readability. Usage example:

```tsx
import Greet from './Greet';

// Example usage
<Greet name="John" />
```

Here, the `name` prop is required and must be of type string.