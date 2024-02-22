import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Counter } from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import {User} from './components/context/User';
import DomRef from './components/ref/DomRef';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: "Clark",
      last: "Kent"
    },
    {
      first: "Princess",
      last: "Diana"
    },
  ]
  return (
    <div className="App">
      <Greet name={'John'} messageCount={5} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Button handleClick={(event, id) => console.log('Button Clicked', event, id)} />
      <Input value={''} handleChange={event => console.log(event)} />
      <Container styles={{ border: "3px solid red", padding: "1rem" }} />
      <LoggedIn/>
      <User/>
      <Counter/>
      <ThemeContextProvider>
      <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <DomRef/>
    </div>
  );
}

export default App;
