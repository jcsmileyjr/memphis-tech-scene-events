import EventIconName from "./eventIconEnum"
interface EventInterface {
    id: number,
    name: string,
    date: string,
    time: string,
    description: string,
    iconName: EventIconName,
}

export default EventInterface;