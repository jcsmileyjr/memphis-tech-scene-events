import Testimonial from "./testimonial";
// import { getTestimonials } from "@/server/testimonial.server"; // Leave this commented out for now
import TestimonialInterface from "@/interfaces/testimonialInterface";
import { sanitizeQuotes } from "@/libs/sanitizeQuotes";

const PLACEHOLDER_TESTIMONIALS: TestimonialInterface[] = [
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
    }
];

/**
 * Component that renders a section of testimonials. When the screen size is
 * smaller than 1280px, only the first testimonial is rendered. Otherwise, all
 * testimonials are rendered. The testimonials are fetched from the server when
 * the component mounts.
 *
 * @returns A section element containing the testimonials.
 */
const LP_Testimonials = () => {
    const sanitizedTestimonials = PLACEHOLDER_TESTIMONIALS.map(
        (testimonial) => ({
            ...testimonial,
            content: sanitizeQuotes(testimonial.content),
            name: sanitizeQuotes(testimonial.name),
            title: sanitizeQuotes(testimonial.title),
            community: sanitizeQuotes(testimonial.community),
        })
    );    

    return (
        <section
            aria-label="Testimonials Section"
            className=""
        >
            <div className="xl:hidden flex-row flex-wrap justify-between gap-2 py-4">
                <Testimonial
                    key={sanitizedTestimonials[0].testimonialId}
                    content={sanitizedTestimonials[0].content}
                    name={sanitizedTestimonials[0].name}
                    title={sanitizedTestimonials[0].title}
                    community={sanitizedTestimonials[0].community}
                />
            </div>
            <div className="hidden xl:flex flex-row flex-wrap justify-between gap-2 py-4 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]">
                {
                    sanitizedTestimonials.map((testimonial) => (
                        <Testimonial
                            key={testimonial.testimonialId}
                            content={testimonial.content}
                            name={testimonial.name}
                            title={testimonial.title}
                            community={testimonial.community}
                        />
                    ))
                } 
            </div>
        </section>
    );
};

export default LP_Testimonials;
