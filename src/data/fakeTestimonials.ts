import TestimonialInterface from "@/interfaces/testimonialInterface"

const fakeTestimonials: TestimonialInterface[] = [
    {
        content: 'The Memphis Tech Scene newsletter has become an essential resource for our work at CodeCrew. It provides a centralized, accessible place for our students to discover tech events and opportunities across Memphis, many of which they wouldn’t hear about otherwise. It genuinely warms my heart to see our young people engaged in the broader tech community, growing their networks and confidence. This newsletter has also made it incredibly easy for us to share announcements, whether online or on my radio show, Actual Intelligence with Audrey, to keep our community informed and involved. It’s a simple but powerful tool helping bridge access and inclusion in tech for Memphis.',
        name: 'Audrey P. Willis',
        title: 'Chief Innovation & Programming Officer of CodeCrew and Host of (AI) Actual Intelligence on 88.5FM',
        community: 'Code Crew',
        testimonialId: 1
    },
    {
        content: 'The Memphis Tech Scene newsletter has been the single most effective source of new attendees for my weekly AI meetup. After JC featured the event, I immediately saw a noticeable uptick in interest and participation. His consistency, clarity, and genuine support of the local tech ecosystem make the newsletter an invaluable resource—not just for visibility, but for building real community. I’m grateful for what he’s doing to bring Memphis technologists together.',
        name: 'Scott Finney',
        title: 'Organizer',
        community: 'Work Smarter with AI Meetup',
        testimonialId: 2
    },
    {
        content: 'The Memphis Tech Scene newsletter has been a total game-changer for us. Promoting our coding workshops used to be a hustle, but now, we’re seeing new faces at every event. Folks who said they found us through the newsletter! It’s like someone finally connected all the tech dots in Memphis, and the whole city’s thriving because of it.',
        name: 'Lena Ortiz',
        title: 'Attendee',
        community: 'UX Enthusiast',
        testimonialId: 3
    },
    {
        content: 'I live for Friday’s because that’s when the newsletter hits my inbox for the upcoming week. It’s beautifully curated and full of energy. It doesn’t just tell you where to go, it makes you excited to show up. Memphis tech feels more alive and united than ever.',
        name: 'Tasha Greene',
        title: 'Software Engineer',
        community: 'Regular Event-Goer',
        testimonialId: 4
    }
]

export default fakeTestimonials;