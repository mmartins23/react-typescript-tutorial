## React TypeScript Tutorial - 4 - Basic Props

### Introduction
In this tutorial, we will extend our understanding of TypeScript prop types by examining a few additional basic prop types. We will build upon the `Greet` component from the previous video and introduce new components to demonstrate different types of props.

### Steps

1. **Extending the `Greet` Component:**
   - Add a `messageCount` prop to display the number of unread messages.
   - Define the prop type as a number in `GreetProps`.
   - Update the `App` component to pass this prop:
     ```tsx
     type GreetProps = {
         name: string;
         messageCount: number;
         isLoggedIn: boolean;
     }

     function Greet({ name, messageCount, isLoggedIn }: GreetProps) {
         return (
             <div>
                 {isLoggedIn 
                   ? `Good morning, ${name}! You have ${messageCount} unread messages.` 
                   : "Welcome Guest"}
             </div>
         )
     }

     export default Greet;
     ```
   - Update the `App` component to use the new props:
     ```tsx
     import './App.css';
     import Greet from './components/Greet';

     function App() {
       return (
         <div className="App">
           <Greet name="Hal Jordan" messageCount={10} isLoggedIn={true} />
         </div>
       );
     }

     export default App;
     ```

2. **Boolean Prop:**
   - Add an `isLoggedIn` prop to conditionally render the user greeting.
   - Update the prop type in `GreetProps` to include a boolean type for `isLoggedIn`.
   - Adjust the `Greet` component to use a ternary operator to display different messages based on the `isLoggedIn` prop.

3. **Object Prop:**
   - Create a new `Person` component to accept a `name` object with `first` and `last` properties.
   - Define the prop type for `Person`:
     ```tsx
     type PersonProps = {
         name: {
             first: string;
             last: string;
         }
     }

     const Person = ({ name }: PersonProps) => {
         return (
             <div>
                 {name.first} {name.last}
             </div>
         )
     }

     export default Person;
     ```
   - Update the `App` component to pass the `name` object:
     ```tsx
     import Person from './components/Person';

     function App() {
       const personName = {
         first: 'Bruce',
         last: 'Wayne'
       }

       return (
         <div className="App">
           <Greet name="Hal Jordan" messageCount={10} isLoggedIn={true} />
           <Person name={personName} />
         </div>
       );
     }

     export default App;
     ```

4. **Array of Objects Prop:**
   - Create a new `PersonList` component to accept an array of `name` objects.
   - Define the prop type for `PersonList`:
     ```tsx
     type PersonListProps = {
         names: {
             first: string;
             last: string;
         }[]
     }

     export const PersonList = ({ names }: PersonListProps) => {
         return (
             <div>
                 {names.map(name => (
                     <h2 key={name.first}>
                         {name.first} {name.last}
                     </h2>
                 ))}
             </div>
         )
     }
     ```
   - Update the `App` component to pass an array of `name` objects:
     ```tsx
     import { PersonList } from './components/PersonList';

     function App() {
       const personName = {
         first: 'Bruce',
         last: 'Wayne'
       }

       const nameList = [
         {
           first: 'Bruce',
           last: 'Wayne'
         },
         {
           first: 'Clark',
           last: 'Kent'
         },
         {
           first: 'Princess',
           last: 'Diana'
         }
       ]

       return (
         <div className="App">
           <Greet name="Hal Jordan" messageCount={10} isLoggedIn={true} />
           <Person name={personName} />
           <PersonList names={nameList} />
         </div>
       );
     }

     export default App;
     ```

### Conclusion
In this tutorial, we covered:
- Number type props (`messageCount`)
- Boolean type props (`isLoggedIn`)
- Object type props (`name` in `Person` component)
- Array of objects type props (`names` in `PersonList` component)

These basic prop types are common in React applications and understanding how to type them in TypeScript improves code quality and developer productivity. In the next tutorial, we will explore more advanced examples.