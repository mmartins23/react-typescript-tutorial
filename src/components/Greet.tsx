type GreetProps = {
    name: string;
}

export default function Greet({name}: GreetProps) {
  return (
    <div>
        <h2>Hi {name}, you have 5 new messages.</h2>
    </div>
  )
}