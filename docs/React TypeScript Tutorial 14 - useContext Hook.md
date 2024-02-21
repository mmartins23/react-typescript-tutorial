# React TypeScript Tutorial 14 - useContext Hook

In this example, you've demonstrated the use of the `useContext` hook along with the creation of a `ThemeContext` using the `createContext` function. The `Box` component consumes the theme from the context and applies it to its styling. Additionally, you have a `ThemeContextProvider` component to provide the theme context to its children.

Here's a breakdown of your code:

1. **`Box` Component:**
   ```javascript
   import React, { useContext } from 'react';
   import { ThemeContext } from './ThemeContext';

   export const Box = () => {
     const theme = useContext(ThemeContext);

     return (
       <div
         style={{
           backgroundColor: theme.primary.main,
           color: theme.primary.text
         }}>
         Theme context
       </div>
     );
   };
   ```

   - The `Box` component uses the `useContext` hook to access the theme from the `ThemeContext`. It then applies the theme to the styling of the `div` element.

2. **`ThemeContextProvider` Component:**
   ```javascript
   import React, { createContext } from 'react';
   import { theme } from './theme';

   type ThemeContextProviderProps = {
     children: React.ReactNode;
   };

   export const ThemeContext = createContext(theme);

   export const ThemeContextProvider = ({
     children
   }: ThemeContextProviderProps) => {
     return (
       <ThemeContext.Provider value={theme}>
         {children}
       </ThemeContext.Provider>
     );
   };
   ```

   - The `ThemeContextProvider` component creates a context using `createContext` and provides the `theme` as the default value.
   - It takes `children` as a prop and wraps them with `ThemeContext.Provider`.

3. **`theme` Object:**
   ```javascript
   export const theme = {
     primary: {
       main: '#3f51b5',
       text: '#fff'
     },
     secondary: {
       main: '#f50057',
       text: '#fff'
     }
   };
   ```

   - The `theme` object contains color values for primary and secondary themes.

Usage example:

```javascript
import React from 'react';
import { Box } from './Box';
import { ThemeContextProvider } from './ThemeContext';

export const App = () => {
  return (
    <ThemeContextProvider>
      <Box />
    </ThemeContextProvider>
  );
};
```

This example showcases how to use the `useContext` hook to consume a context and apply its values in styling.