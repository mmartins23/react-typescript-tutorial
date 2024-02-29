import './App.css';
import Button from './components/props/Button';
import Container from './components/props/Container';
import Greet from './components/props/Greet';
import Input from './components/props/Input';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
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
import { CustomButton } from './components/html/Button';
import { Text } from './components/polymorphic/Text'
import Heading from './components/props/Heading';
import Oscar from './components/props/Oscar';
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
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>And the Oscar goes to ...</Heading>
      </Oscar>
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
      <CustomButton variant={'primary'}>Click me</CustomButton>
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
