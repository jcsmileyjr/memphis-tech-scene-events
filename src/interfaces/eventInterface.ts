import EventIconName from "./eventIconEnum";
import EventType  from "./eventTypeEnum";
import EventCategory from "./eventCategoryEnum";

interface EventInterface {
    id: number,
    name: string,
    date: string,
    time: string,
    eventType: EventType,
    eventCategory: EventCategory,
    RSVP: string,
    description: string,
    shortIntro: string
    iconName: EventIconName,
}

export default EventInterface;