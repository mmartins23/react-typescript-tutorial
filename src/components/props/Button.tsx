type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

export default function Button({ handleClick }: ButtonProps) {
    return (
        <button onClick={event => handleClick(event, 1)}>Click</button>
    )
}