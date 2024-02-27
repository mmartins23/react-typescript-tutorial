# React TypeScript Tutorial 22 - Wrapping HTML Elements

It looks like you are defining a `CustomButton` component in React with TypeScript that wraps the native `button` element. This component takes `variant` and `children` as its props, and it also utilizes the `Omit` utility type to exclude the 'children' prop from the native `button` element props. Let's break down the code:

```tsx
type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
```

Here's an explanation of the code:

1. **Type Definition (`ButtonProps`):**
   - `ButtonProps` is a type that defines the properties expected by the `CustomButton` component.
   - It includes `variant` and `children` props.
   - It uses the `Omit` utility type to exclude the 'children' prop from the native `button` element props (`React.ComponentProps<'button'>`).

2. **CustomButton Component:**
   - The `CustomButton` component takes `variant`, `children`, and any other native `button` element props specified by `rest`.
   - It renders a `<button>` element with a class name based on the `variant`.
   - The `...rest` spread operator is used to pass any additional props to the underlying `button` element.

3. **Usage Example:**
   ```tsx
   <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
     Click me
   </CustomButton>
   ```

   Example usage of the `CustomButton` component with a 'primary' variant and an additional `onClick` prop.

This pattern allows you to create a reusable `CustomButton` component with specific styling based on the `variant` prop while still accepting and passing through any native `button` element props.