# React TypeScript Tutorial - 24 - Polymorphic Components

In this tutorial, we explore the concept of polymorphic components in React with TypeScript. Polymorphic components allow a single component to render different HTML elements based on a prop, which is particularly useful for building component libraries or design systems.

## Overview

### Key Concepts
1. **Polymorphic Components**: Components that can render different HTML elements based on a prop.
2. **Type Safety**: Ensuring type safety for props across different HTML elements.
3. **Reusable and Semantic**: Enhancing reusability and maintaining semantic HTML.

### Practical Example
We create a `Text` component that can render as different HTML elements based on an `as` prop.

## Steps to Create a Polymorphic Component

### Step 1: Define Component Props

Define the `TextOwnProps` type for the `Text` component.

```tsx
import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: E;
};
```

- **size**: Optional, can be `'sm'`, `'md'`, or `'lg'`.
- **color**: Optional, can be `'primary'` or `'secondary'`.
- **children**: Required, any valid React node.
- **as**: Optional, the type of element to render.

### Step 2: Combine Props with HTML Element Props

Combine `TextOwnProps` with props of the HTML element specified by the `as` prop.

```tsx
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
```

- **TextProps**: Combines `TextOwnProps` with the props of the specified HTML element, omitting any overlapping keys.

### Step 3: Create the Text Component

Implement the `Text` component to handle polymorphic behavior.

```tsx
export const Text = <E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as
}: TextProps<E>) => {
  const Component = as || 'div';
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
```

- **Component**: Defaults to `div` if the `as` prop is not provided.
- **Render**: Uses the `Component` variable to render the appropriate HTML element.

### Step 4: Usage in App Component

Use the `Text` component in the `App` component with different `as` props.

```tsx
import './App.css';
import { Text } from './components/polymorphic/Text';

function App() {
  return (
    <div className="App">
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  );
}

export default App;
```

- **Heading**: Rendered as an `h1` element.
- **Paragraph**: Rendered as a `p` element.
- **Label**: Rendered as a `label` element with an `htmlFor` attribute.

## Summary

### Key Takeaways

1. **Polymorphic Components**: Enable components to render different HTML elements using the `as` prop.
2. **Type Safety**: Achieved by combining custom props with HTML element props using TypeScript.
3. **Reusability and Semantics**: Enhances the reusability of components and maintains semantic HTML.

### Practical Applications

- **Design Systems**: Useful for building design systems where components need to render as different HTML elements.
- **Component Libraries**: Ensures flexibility and type safety when creating reusable components.

By following these steps, you can create polymorphic components in React with TypeScript, allowing for flexible and type-safe component usage in your applications.