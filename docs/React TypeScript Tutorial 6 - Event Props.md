# React TypeScript Tutorial - 6 - Event Props

In this example, you've created a React functional component named `Button` that takes a prop `handleClick` of type `ButtonProps`. The `ButtonProps` type defines a function property named `handleClick`, which takes a `React.MouseEvent<HTMLButtonElement>` and a `number` (id) and returns `void`.

Here's a breakdown of your code:

1. **Type Definition (`ButtonProps`):**
   ```typescript
   type ButtonProps = {
     handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
   }
   ```

   You've defined a type `ButtonProps` which specifies that the `handleClick` prop should be a function taking a `React.MouseEvent<HTMLButtonElement>` and a `number` (id) and returning `void`.

2. **Functional Component (`Button`):**
   ```typescript
   export default function Button({ handleClick }: ButtonProps) {
     return (
       <button onClick={event => handleClick(event, 1)}>Click</button>
     )
   }
   ```

   - The `Button` component receives the `handleClick` prop using destructuring directly in the function parameters.
   - The component renders a `<button>` element with an `onClick` event. When the button is clicked, it calls the `handleClick` prop with the click event and the number `1` as the `id` parameter.

This example demonstrates passing an event handler function with additional parameters (`id` in this case) as a prop to a child component.

***

In this example, you've created a React functional component named `Input` that takes props of type `InputProps`. The `InputProps` type defines two properties: `value` (a string) and `handleChange` (a function that takes an `event` of type `React.ChangeEvent<HTMLInputElement>` and returns `void`).

Here's a breakdown of your code:

1. **Type Definition (`InputProps`):**
   ```typescript
   type InputProps = {
     value: string;
     handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
   }
   ```

   You've defined a type `InputProps` which specifies that the `Input` component should receive two props: `value` (a string) and `handleChange` (a function that takes an input change event and returns `void`).

2. **Functional Component (`Input`):**
   ```typescript
   export default function Input({ value, handleChange }: InputProps) {
     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { console.log(event) }
     return (
       <input type="text" value={value} onChange={handleInputChange} />
     )
   }
   ```

   - The `Input` component receives the `value` and `handleChange` props using destructuring directly in the function parameters.
   - Inside the component, there's a local `handleInputChange` function that logs the input change event to the console. However, this function is not currently being used in the component.

   - The `<input>` element is rendered with the provided `value` prop, and the `onChange` event is set to the `handleInputChange` function.

If you want to use the `handleChange` prop passed from the parent component, you should replace the `handleInputChange` function with the `handleChange` prop directly in the `onChange` event:

```typescript
export default function Input({ value, handleChange }: InputProps) {
  return (
    <input type="text" value={value} onChange={handleChange} />
  )
}
```

Now, when the input value changes, the `handleChange` prop provided from the parent component will be called.