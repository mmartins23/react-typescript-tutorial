# React TypeScript Tutorial 24 - Polymorphic Components

This is an example of a React component written in TypeScript that demonstrates the concept of polymorphic components. Polymorphic components are components that can take different HTML element types as props (`as` prop in this case).

Let's break down the code:

1. `TextOwnProps` is a generic type that defines the allowed props for the `Text` component. It takes a type parameter `E` that extends `React.ElementType` (which represents the type of a React component).

2. `TextProps` is another generic type that extends `TextOwnProps` and also includes the props of the specified HTML element type (`E`). The `Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>` is used to exclude the props defined in `TextOwnProps` from the HTML element's props.

3. The `Text` component is a functional component that takes the generic type parameter `E` with a default value of `'div'`. It uses the `TextProps` type for its props.

4. Inside the component, it checks if the `as` prop is provided. If provided, it uses the specified HTML element type; otherwise, it defaults to a `div`.

5. The component renders the chosen element with a className based on the provided `size` and `color` props.

6. Finally, there are three examples of using the `Text` component with different configurations:

   a. `<Text size='lg' as='h1'>Heading</Text>`
   
   b. `<Text size='md' as='p'>Paragraph</Text>`
   
   c. `<Text size='sm' color='secondary' as='label' htmlFor='someId'>Label</Text>`

These examples showcase how you can create flexible and reusable components in React with TypeScript, allowing developers to specify the HTML element type while maintaining type safety.