import Greet from "../props/Greet"

export default function CustomComponent(props: React.ComponentProps<typeof Greet>) {
    return (
        <div>{props.name}</div>
    )
}