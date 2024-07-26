## React TypeScript Tutorial - 6 - Event Props

Welcome back everyone! In this video, we'll take a look at typing event props in React using TypeScript. We'll focus on two frequently used events as props: the click event on a button and the change event on an input element.

### Typing Click Event Props

1. **Button Component**:
   - Create a new file `Button.tsx`.
   - Define the type for the button props:

     ```tsx
     type ButtonProps = {
         handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
     };
     ```

   - Implement the `Button` component:

     ```tsx
     export const Button = ({ handleClick }: ButtonProps) => {
         return <button onClick={(e) => handleClick(e, 1)}>Click</button>;
     };
     ```

2. **Usage in App Component**:
   - Import and use the `Button` component in your `App` component:

     ```tsx
     import './App.css';
     import { Button } from './components/Button';
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
         </div>
       );
     }

     export default App;
     ```

### Typing Change Event Props

1. **Input Component**:
   - Create a new file `Input.tsx`.
   - Define the type for the input props:

     ```tsx
     type InputProps = {
         value: string;
         handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
     };
     ```

   - Implement the `Input` component:

     ```tsx
     export const Input = ({ value, handleChange }: InputProps) => {
         return <input type="text" value={value} onChange={handleChange} />;
     };
     ```

2. **Usage in App Component**:
   - Import and use the `Input` component in your `App` component (already shown in the above App component code).

### Summary

- **Button Component**: Handles click events, with the type `React.MouseEvent<HTMLButtonElement>`. Example:

  ```tsx
  type ButtonProps = {
      handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  };

  export const Button = ({ handleClick }: ButtonProps) => {
      return <button onClick={(e) => handleClick(e, 1)}>Click</button>;
  };
  ```

- **Input Component**: Handles change events, with the type `React.ChangeEvent<HTMLInputElement>`. Example:

  ```tsx
  type InputProps = {
      value: string;
      handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  export const Input = ({ value, handleChange }: InputProps) => {
      return <input type="text" value={value} onChange={handleChange} />;
  };
  ```

By following these examples, you can effectively type event props in React components using TypeScript, ensuring type safety and reducing potential bugs.