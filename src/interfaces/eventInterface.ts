import EventIconName from "./eventIconEnum"
interface EventInterface {
    id: number,
    name: string,
    date: string,
    time: string,
    eventType: string,
    eventCategory: string,
    RSVP: string,
    description: string,
    shortIntro: string
    iconName: EventIconName,
}

export default EventInterface;