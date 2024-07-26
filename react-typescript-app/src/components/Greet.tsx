type GreetProps = {
    name: string,
    messageCnt?: number,
    isLoggedIn: boolean
}

function Greet({ name, messageCnt = 0, isLoggedIn }: GreetProps) {
    return (
        <div>
            {isLoggedIn ? (
                <h2>
                    Hey {name}! You have {messageCnt} unread messages
                </h2>
            ) : (
                <h2>Welcome Guest</h2>
            )}
        </div>
    )
}

export default Greet;