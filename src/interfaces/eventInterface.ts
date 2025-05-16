import EventIconName from "./eventIconEnum";
import EventType  from "./eventTypeEnum";

interface EventInterface {
    id: number,
    name: string,
    date: string,
    time: string,
    eventType: EventType,
    eventCategory: string,
    RSVP: string,
    description: string,
    shortIntro: string
    iconName: EventIconName,
}

export default EventInterface;