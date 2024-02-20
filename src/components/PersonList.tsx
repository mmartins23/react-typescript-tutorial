type PersonListProps = {
    names: {
        first: string,
        last: string,
    }[]
}

export default function PersonList({ names }: PersonListProps) {
    return (
        <div>{names.map(name => <h2>{name.first} {name.last}</h2>)}</div>
    )
}