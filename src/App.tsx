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
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';

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
      <Private isLoggedIn={true} component={Profile}/>
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive/>
      <Toast position={"left-top"}/>
    </div>
  );
}

export default App;
