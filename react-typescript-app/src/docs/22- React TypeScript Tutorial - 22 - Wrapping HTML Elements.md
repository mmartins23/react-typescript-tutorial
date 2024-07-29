# React TypeScript Tutorial - 22 - Wrapping HTML Elements

In this tutorial, we learn how to wrap HTML elements to create custom components in a React application. This is particularly useful when building a design system or a regular React app without relying on a UI component library. We will see how to combine normal HTML element props with custom props for enhanced functionality and type safety.

## Overview

### Key Concepts:
1. **Creating Custom Components**: Wrapping HTML elements like buttons and inputs with custom styling and additional props.
2. **TypeScript Type Definitions**: Defining and combining custom props with standard HTML element props.
3. **Using the `Omit` Keyword**: Excluding specific props from HTML element types.

### Practical Examples:
1. Custom Button
2. Custom Input

## Custom Button Component

### Step 1: Define Custom Props

We start by creating a `ButtonProps` type that includes a custom `variant` prop and excludes the `children` prop from the HTML button props.

```tsx
type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;
```

- **variant**: Custom prop to specify button styling, either 'primary' or 'secondary'.
- **children**: Restricted to strings using `Omit`.

### Step 2: Create the Custom Button Component

Using the defined props, we create the `CustomButton` component.

```tsx
export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>
            {children}
        </button>
    );
};
```

- **Destructuring**: Extract `variant` and `children` from props.
- **Spreading Props**: Spread the remaining props (`...rest`) onto the button element.
- **Styling**: Apply class names based on the `variant` prop.

### Step 3: Usage in App Component

We use the `CustomButton` component in our `App` component.

```tsx
import { CustomButton } from './components/html/CustomButton';

function App() {
    return (
        <div className="App">
            <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
                Primary Button
            </CustomButton>
        </div>
    );
}

export default App;
```

- **Variant Prop**: Specify `variant="primary"` to style the button.
- **Children**: Pass the button label as a string.
- **Event Handling**: Attach `onClick` event to the button.

## Custom Input Component

### Step 1: Define Input Props

For the `CustomInput` component, we directly use `React.ComponentProps<'input'>`.

```tsx
type InputProps = React.ComponentProps<'input'>;
```

### Step 2: Create the Custom Input Component

The `CustomInput` component uses the defined props.

```tsx
export const Input = (props: InputProps) => {
    return <input {...props} />;
};
```

- **Spreading Props**: Spread all props onto the input element.

### Step 3: Usage in App Component

We use the `CustomInput` component in our `App` component.

```tsx
import { Input } from './components/html/Input';

function App() {
    return (
        <div className="App">
            <Input placeholder="Enter text" />
        </div>
    );
}

export default App;
```

- **Props**: Pass any standard HTML input props like `placeholder`.

## Excluding Props with Omit

### Restricting Children Prop

To restrict the `children` prop to just strings, we use the `Omit` keyword.

```tsx
type ButtonProps = {
    variant: 'primary' | 'secondary';
    children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;
```

- **Omit**: Excludes the `children` prop from `React.ComponentProps<'button'>`.

## Summary

### Key Takeaways

1. **Custom Components**: Learn to wrap HTML elements and create custom React components.
2. **TypeScript Integration**: Use TypeScript to define and combine custom and standard HTML element props.
3. **Omit Keyword**: Exclude specific props from HTML element types to enforce custom restrictions.

### Practical Applications

- **Design Systems**: Useful for creating reusable and type-safe components in design systems.
- **Enhanced Functionality**: Combining custom logic with standard HTML elements.

By following these steps, you can create custom, type-safe React components that enhance your application's functionality and maintainability.