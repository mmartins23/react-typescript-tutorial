# React TypeScript Tutorial 23 - Extracting a Components Prop Types

The provided code snippet defines a functional component called `CustomComponent` in TypeScript with React. The component takes props using the `React.ComponentProps<typeof Greet>` syntax, which infers the prop types from the `Greet` component and applies them to the `CustomComponent`.

Here's a breakdown:

1. `import Greet from "../props/Greet"`: Import the `Greet` component from the specified file or directory.

2. `export default function CustomComponent(props: React.ComponentProps<typeof Greet>)`: Define a functional component named `CustomComponent`. The `props` parameter is typed using `React.ComponentProps<typeof Greet>`, which means that `CustomComponent` accepts any props that the `Greet` component would accept.

3. Inside the component, you are using `props.name` assuming that the `Greet` component has a prop named `name`.

4. The component returns a `div` displaying the value of the `name` prop.

This setup is useful when you want to create a component that mirrors the prop types of another component (in this case, `Greet`). It helps ensure that `CustomComponent` receives the correct and compatible props.

Example usage:

```tsx
// Assuming Greet component has a prop named 'name'
// Import CustomComponent and use it with similar props as Greet

import React from 'react';
import Greet from "../props/Greet";
import CustomComponent from "./CustomComponent";

function App() {
  return (
    <div>
      {/* Using CustomComponent with the same prop types as Greet */}
      <CustomComponent name="John" />

      {/* Using Greet directly */}
      <Greet name="Jane" />
    </div>
  );
}

export default App;
```

In this example, `CustomComponent` is utilized with the same prop types as `Greet`. It ensures consistency and helps catch potential errors related to props during development.