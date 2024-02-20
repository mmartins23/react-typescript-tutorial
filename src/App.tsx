import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';
import LoggedIn from './components/state/LoggedIn';

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
    </div>
  );
}

export default App;
