"use client";
import { useEffect, useState } from "react";
import Testimonial from "./testimonial";
import { getTestimonials } from "@/server/testimonial.server";
import TestimonialInterface from "@/interfaces/testimonialInterface";
import { useMediaQuery } from "react-responsive";
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
    const [testimonials, setTestimonials] = useState<TestimonialInterface[]>(
        PLACEHOLDER_TESTIMONIALS
    );
    const [isLoading, setIsLoading] = useState(true);
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1280px)" });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const fetchedTestimonials: TestimonialInterface[] =
                    await getTestimonials();
                const sanitizedTestimonials = fetchedTestimonials.map(
                    (testimonial) => ({
                        ...testimonial,
                        content: sanitizeQuotes(testimonial.content),
                        name: sanitizeQuotes(testimonial.name),
                        title: sanitizeQuotes(testimonial.title),
                        community: sanitizeQuotes(testimonial.community),
                    })
                );
                setTestimonials(sanitizedTestimonials);
            } catch (error) {
                console.error("Failed to fetch testimonials:", error);
                setError("Failed to load testimonials. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    if (isLoading) {
        return (
            <section aria-label="Testimonials Section" className="flex flex-row flex-wrap justify-between gap-2 py-8">
                {/* Placeholder for loading state */}
                {
                    testimonials.map((testimonial) => (
                        <Testimonial
                            key={testimonial.testimonialId}
                            content={testimonial.content}
                            name={testimonial.name}
                            title={testimonial.title}
                            community={testimonial.community}
                        />
                    ))
                }
            </section>
        );
    }

    if (error) {
        return (
            <section aria-label="Testimonials Section" className="py-8 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]">
                <p className="text-center text-red-600 font-normal" role="alert">
                    {error}
                </p>
            </section>
        );
    }

    if (!isLoading && testimonials.length === 0) {
        return (
            <section aria-label="Testimonials Section" className="flex flex-col py-8">
                <p className="text-center text-gray-700 font-normal">
                    No testimonials available at the moment.
                </p>
            </section>
        );
    }

    return (
        <section
            aria-label="Testimonials Section"
            className="flex flex-row flex-wrap justify-between gap-2 py-4 2xl:mx-auto 2xl:w-full 2xl:max-w-[2300px]"
        >
            {isTabletOrMobile && testimonials.length > 0 ? (
                <Testimonial
                    key={testimonials[0].testimonialId}
                    content={testimonials[0].content}
                    name={testimonials[0].name}
                    title={testimonials[0].title}
                    community={testimonials[0].community}
                />
            ) : (
                testimonials.map((testimonial) => (
                    <Testimonial
                        key={testimonial.testimonialId}
                        content={testimonial.content}
                        name={testimonial.name}
                        title={testimonial.title}
                        community={testimonial.community}
                    />
                ))
            )}
        </section>
    );
};

export default LP_Testimonials;
