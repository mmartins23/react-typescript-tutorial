# React TypeScript Tutorial 7 - Style Props

In this example, you've created a React functional component named `Container` that takes a prop `styles` of type `React.CSSProperties`. The `ContainerProps` type defines a single property named `styles` of type `React.CSSProperties`, which represents a style object.

Here's a breakdown of your code:

1. **Type Definition (`ContainerProps`):**
   ```typescript
   type ContainerProps = {
     styles: React.CSSProperties;
   }
   ```

   You've defined a type `ContainerProps` which specifies that the `styles` prop should be of type `React.CSSProperties`.

2. **Functional Component (`Container`):**
   ```typescript
   export default function Container({styles}: ContainerProps) {
     return (
       <div style={styles}>Text content goes here</div>
     )
   }
   ```

   - The `Container` component receives the `styles` prop using destructuring directly in the function parameters.
   - The component renders a `<div>` element with the inline style set to the provided `styles` prop.

3. **Usage Example:**
   ```jsx
   <Container styles={{ border: "3px solid red", padding: "1rem" }}>
     Text content goes here
   </Container>
   ```

   The `Container` component is used with the `styles` prop set to an object specifying border and padding styles.

This example demonstrates how to use a `React.CSSProperties` type for styling props in a React component.