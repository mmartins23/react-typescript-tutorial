type GreetProps = {
    name: string
}

function Greet({ name }: GreetProps) {
    return (
        <div>Good morning, {name}! You have 10 unread messages.</div>
    )
}

export default Greet;