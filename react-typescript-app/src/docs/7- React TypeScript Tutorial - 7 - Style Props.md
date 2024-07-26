## React TypeScript Tutorial - 7 - Style Props

Welcome back everyone! In this video, we will see how to type styles as props in React components using TypeScript.

### Container Component

1. **Create `Container.tsx`**:
   - Define the type for the container props:

     ```tsx
     type ContainerProps = {
         styles: React.CSSProperties;
     }
     ```

   - Implement the `Container` component:

     ```tsx
     import React from 'react';

     export const Container = ({ styles }: ContainerProps) => {
         return (
             <div style={styles}>
                 Text content goes here
             </div>
         );
     };
     ```

### Usage in App Component

1. **Import and Use the `Container` Component**:
   - Import the `Container` component and use it in your `App` component:

     ```tsx
     import './App.css';
     import { Button } from './components/Button';
     import { Container } from './components/Container';
     import Greet from './components/Greet';
     import { Heading } from './components/Heading';
     import { Input } from './components/Input';
     import { Oscar } from './components/Oscar';
     import Person from './components/Person';
     import { PersonList } from './components/PersonList';
     import { Status } from './components/Status';

     function App() {
       const personName = {
         first: 'Bruce',
         last: 'Wayne',
       };

       const nameList = [
         {
           first: 'Bruce',
           last: 'Wayne',
         },
         {
           first: 'Clark',
           last: 'Kent',
         },
         {
           first: 'Princess',
           last: 'Diana',
         },
       ];

       return (
         <div className="App">
           <Greet name="Hal Jordan" messageCnt={10} isLoggedIn={true} />
           <Person name={personName} />
           <PersonList names={nameList} />
           <Status status="loading" />
           <Heading>Placeholder text</Heading>
           <Oscar>
             <Heading>Oscar goes to Dicaprio</Heading>
           </Oscar>
           <Button handleClick={(e, id) => {
             console.log('Button clicked', e, id);
           }} />
           <Input value="" handleChange={(e) => console.log(e)} />
           <Container styles={{ border: '1px solid black', padding: '1rem' }} />
         </div>
       );
     }

     export default App;
     ```

### Explanation

- **Type Definition for Styles**:
  - The type for the `styles` prop is `React.CSSProperties`, which is provided by the React library to ensure type safety and proper CSS property validation.

- **Container Component**:
  - The `Container` component accepts a `styles` prop of type `React.CSSProperties`.
  - This allows you to pass CSS styles dynamically as props.

- **App Component**:
  - The `Container` component is imported and used in the `App` component.
  - CSS properties such as `border` and `padding` are passed as styles to the `Container`.

### Benefits

- **Type Safety**: Ensures that only valid CSS properties are used.
- **Error Detection**: Helps catch typos and invalid CSS properties or values during development.
- **Improved Developer Experience**: Provides IntelliSense and autocomplete for CSS properties in TypeScript-enabled editors.

### Conclusion

By using `React.CSSProperties` to type the `styles` prop, you can enhance type safety and catch errors early during development. This is especially helpful when dealing with dynamic styles in your React components. Make sure to subscribe to the channel for more tips and tutorials. Thank you for watching, and I'll see you in the next video!