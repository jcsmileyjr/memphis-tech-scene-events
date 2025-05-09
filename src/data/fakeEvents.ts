import EventInterface from "@/interfaces/eventInterface";
import EventIconName from "@/interfaces/eventIconEnum";

const fakeEvents: EventInterface[] = [
    { id: 1, name: "Memphis Python User Group", date: "April 28, 2025", time: "6PM", description: "Let’s Talk Ollama tech talk by Douglas Starnes", iconName: EventIconName.BUG },
    { id: 2, name: "Memphis Tech Luncheon", date: "April 30, 2025", time: "6PM", description: "Lunch is at Epicenter Memphis", iconName: EventIconName.SANDWICH },
    { id: 3, name: "Memphis AI/AR Meetup", date: "April 30, 2025", time: "6PM", description: "An Manifesto for AI in Memphis", iconName: EventIconName.BOT },
];

export default fakeEvents;