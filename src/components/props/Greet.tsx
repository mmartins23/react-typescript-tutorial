type GreetProps = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
}

export default function Greet({name, messageCount,isLoggedIn }: GreetProps) {
  return (
    <div>
        {isLoggedIn ? <h2>Hi {name}, you have {messageCount} new messages.</h2> : <h2>Welcome Guest</h2>}
        
    </div>
  )
}