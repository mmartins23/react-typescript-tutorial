# React TypeScript Tutorial 21 - Template Literals and Exclude

It looks like you are defining a `Toast` component in React with TypeScript, using template literals and the `Exclude` utility type. Let's break down the code:

```tsx
type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>
    | 'center';
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
```

Here's an explanation of the code:

1. **Type Definitions:**
   - `HorizontalPosition` and `VerticalPosition` are string literal types that represent the possible horizontal and vertical positions for a toast notification.

2. **ToastProps Type:**
   - `ToastProps` is a type that defines the properties expected by the `Toast` component.
   - The `position` prop is defined as a union type using template literals and the `Exclude` utility type.
   - `Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'>` excludes the specific position 'center-center' from the possible positions.
   - The union type also includes the string literal type `'center'`.

3. **Toast Component:**
   - The `Toast` component takes a `position` prop of type `ToastProps`.
   - It renders a `<div>` displaying the toast notification position.

4. **Usage Example:**
   ```tsx
   <Toast position="center" />
   <Toast position="left-top" />
   ```

   Example usage of the `Toast` component with different positions.

This setup allows you to ensure that the `position` prop provided to the `Toast` component is a valid combination of horizontal and vertical positions, excluding 'center-center' from the possibilities.