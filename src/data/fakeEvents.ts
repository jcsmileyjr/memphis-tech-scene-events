import EventInterface from "@/interfaces/eventInterface";
import EventIconName from "@/interfaces/eventIconEnum";

const fakeEvents: EventInterface[] = [
    { id: 1, name: "Memphis Python User Group", date: "April 28, 2025", time: "6PM", eventType: "Virtual", eventCategory: "Tech Talk", RSVP: "RSVP", description: "Curious about running LLMs locally? Douglas Starnes is diving deep into Ollama from installation to integration. Plus, he is demoing an AI toolkit for VS Code. Pythonistas, don’t miss it!", shortIntro: "Let’s Talk Ollama tech talk by Douglas Starnes", iconName: EventIconName.BUG },
    { id: 2, name: "Memphis Tech Luncheon", date: "April 30, 2025", time: "11:30AM", eventType: "In-Person", eventCategory: "Networking", RSVP: "RSVP", description: "Come meet local innovators and get plugged into what’s next with boxed lunches from Jason's Deli and big ideas in Epicenter’s downtown HQ.", shortIntro: "Lunch is at Epicenter Memphis", iconName: EventIconName.SANDWICH },
    { id: 3, name: "Memphis AI/AR Meetup", date: "April 30, 2025", time: "6:30PM", eventType: "In-Person", eventCategory: "Tech Talk", RSVP: "RSVP", shortIntro: "An Manifesto for AI in Memphis", description: "Who doesn't love New York-style pizza and a tech talk? Join Christopher Grayson as he unveils AAIA’s roadmap for AI innovation in Memphis at the Slice Up cafe.", iconName: EventIconName.BOT },
];

export default fakeEvents;